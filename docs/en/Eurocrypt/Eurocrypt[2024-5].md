# Eurocrypt[2024-5]
## Efficient Arithmetic in Garbled Circuits.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#efficient-arithmetic-in-garbled-circuits)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#efficient-arithmetic-in-garbled-circuits)
### Authors
* David Heath, University of Illinois Urbana-Champaign, Champaign, USA
### Abstract
> Garbled Circuit (GC) techniques usually work with Boolean circuits. Despite intense interest, efficient arithmetic generalizations of GC were only known from strong assumptions, such as LWE.
> 
> We construct symmetric-key-based arithmetic garbled circuits from circular correlation robust hashes, the assumption underlying the celebrated Free XOR garbling technique. Let \(\lambda \) denote a security parameter, and consider the integers \(\mathbb {Z}_m\) for any \(m \ge 2\). Let \(\ell = \lceil \log _2 m \rceil \) be the bit length of \(\mathbb {Z}_m\) values. We garble arithmetic circuits over \(\mathbb {Z}_m\) where the garbling of each gate has size \(O(\ell \cdot \lambda )\) bits. Contrast this with Boolean-circuit-based arithmetic, requiring \(O(\ell ^2\cdot \lambda )\) bits via the schoolbook multiplication algorithm, or \(O(\ell ^{1.585}\cdot \lambda )\) bits via Karatsuba’s algorithm.
> 
> Our arithmetic gates are compatible with Boolean operations and with Garbled RAM, allowing to garble complex programs of arithmetic values.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_1](https://doi.org/10.1007/978-3-031-58740-5_1)
## Can Alice and Bob Guarantee Output to Carol?
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#can-alice-and-bob-guarantee-output-to-carol)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#can-alice-and-bob-guarantee-output-to-carol)
### Authors
* Bar Alon, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Eran Omri, Department of Computer Science, Ariel Cyber Innovation Center (ACIC), Ariel University, Ariel, Israel
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington, DC, USA
### Abstract
> In the setting of solitary output computations, only a single designated party learns the output of some function applied to the private inputs of all participating parties with the guarantee that nothing beyond the output is revealed. The setting of solitary output functionalities is a special case of secure multiparty computation, which allows a set of mutually distrusting parties to compute some function of their private inputs. The computation should guarantee some security properties, such as correctness, privacy, fairness, and output delivery. Full security captures all these properties together.
> 
> Solitary output computation is a common setting that has become increasingly important, as it is relevant to many real-world scenarios, such as federated learning and set disjointness. In the set-disjointness problem, a set of parties with private datasets wish to convey to another party whether they have a common input. In this work, we investigate the limits of achieving set-disjointness which already has numerous applications and whose feasibility (under non-trivial conditions) was left open in the work of Halevi et al. (TCC 2019).
> 
> Towards resolving this, we completely characterize the set of Boolean functions that can be computed in the three-party setting in the face of a malicious adversary that corrupts up to two of the parties. As a corollary, we characterize the family of set-disjointness functions that can be computed in this setting, providing somewhat surprising results regarding this family and resolving the open question posed by Halevi et al.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_2](https://doi.org/10.1007/978-3-031-58740-5_2)
## SPRINT: High-Throughput Robust Distributed Schnorr Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#sprint-high-throughput-robust-distributed-schnorr-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#sprint-high-throughput-robust-distributed-schnorr-signatures)
### Authors
* Fabrice Benhamouda, AWS, New York, NY, USA
* Shai Halevi, AWS, New York, NY, USA
* Hugo Krawczyk, AWS, New York, NY, USA
* Tal Rabin, AWS, New York, NY, USA
* Yiping Ma, University of Pennsylvania, Philadelphia, PA, USA
* Tal Rabin, University of Pennsylvania, Philadelphia, PA, USA
### Abstract
> We describe robust high-throughput threshold protocols for generating Schnorr signatures in an asynchronous setting with potentially hundreds of parties. The protocols run a single message-independent interactive ephemeral randomness generation procedure (i.e., DKG) followed by non-interactive signature generation for multiple messages, at a communication cost similar to one execution of a synchronous non-robust protocol in prior work (e.g., Gennaro et al.) and with a large number of parties (ranging from few tens to hundreds and more). Our protocols extend seamlessly to the dynamic/proactive setting where each run of the protocol uses a new committee with refreshed shares of the secret key; in particular, they support large committees periodically sampled from among the overall population of parties and the required secret state is transferred to the selected parties. The protocols work over a broadcast channel and are robust (provide guaranteed output delivery) even over asynchronous networks.
> 
> The combination of these features makes our protocols a good match for implementing a signature service over a public blockchain with many validators, where guaranteed output delivery is an absolute must. In that setting, there is a system-wide public key, where the corresponding secret signature key is distributed among the validators. Clients can submit messages (under suitable controls, e.g., smart contracts), and authorized messages are signed relative to the global public key.
> 
> Asymptotically, when running with committees of n parties, our protocols can generate \(\varOmega (n^2)\) signatures per run, while providing resilience against \(\varOmega (n)\) corrupted nodes and broadcasting only \(O(n^2)\) group elements and scalars (hence O(1) elements per signature).
> 
> We prove the security of our protocols via a reduction to the hardness of the discrete logarithm problem in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_3](https://doi.org/10.1007/978-3-031-58740-5_3)
## Efficient and Generic Methods to Achieve Active Security in Private Information Retrieval and More Advanced Database Search.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#efficient-and-generic-methods-to-achieve-active-security-in-private-information-retrieval-and-more-advanced-database-search)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#efficient-and-generic-methods-to-achieve-active-security-in-private-information-retrieval-and-more-advanced-database-search)
### Authors
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Kaoru Kurosawa, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Kaoru Kurosawa, Research and Development Initiative, Chuo University, Tokyo, Japan
* Koji Nuida, Institute of Mathematics for Industry, Kyushu University, Fukuoka, Japan
### Abstract
> Motivated by secure database search, we present secure computation protocols for a function f in the client-servers setting, where a client can obtain f(x) on a private input x by communicating with multiple servers each holding f. Specifically, we propose generic compilers from passively secure protocols, which only keep security against servers following the protocols, to actively secure protocols, which guarantee privacy and correctness even against malicious servers. Our compilers are applied to protocols computing any class of functions, and are efficient in that the overheads in communication and computational complexity are only polynomial in the number of servers, independent of the complexity of functions. We then apply our compilers to obtain concrete actively secure protocols for various functions including private information retrieval (PIR), bounded-degree multivariate polynomials and constant-depth circuits. For example, our actively secure PIR protocols achieve exponentially better computational complexity in the number of servers than the currently best-known protocols. Furthermore, our protocols for polynomials and constant-depth circuits reduce the required number of servers compared to the previous actively secure protocols. In particular, our protocol instantiated from the sparse Learning Parity with Noise (LPN) assumption is the first actively secure protocol for multivariate polynomials which has the minimum number of servers, without assuming fully homomorphic encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_4](https://doi.org/10.1007/978-3-031-58740-5_4)
## Constant-Round Simulation-Secure Coin Tossing Extension with Guaranteed Output.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#constant-round-simulation-secure-coin-tossing-extension-with-guaranteed-output)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#constant-round-simulation-secure-coin-tossing-extension-with-guaranteed-output)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Jack Doerner, Technion, Haifa, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Jack Doerner, Reichman University, Herzliya, Israel
* Jack Doerner, Brown University, Providence, USA
* Varun Narayanan, University of California, Los Angeles, USA
### Abstract
> Common randomness is an essential resource in many applications. However, Cleve (STOC 86) rules out the possibility of tossing a fair coin from scratch in the presence of a dishonest majority. A second-best alternative is a Coin Tossing Extension (CTE) protocol, which uses an “online” oracle that produces a few common random bits to generate many common random-looking bits. We initiate the systematic study of fully-secure CTE, which guarantees output even in the presence of malicious behavior. A fully-secure two-party statistical CTE protocol with black-box simulation was implicit in Hofheinz et al. (Eurocrypt 06), but its round complexity is nearly linear in its output length. The problem of constant-round CTE with superlogarithmic stretch remained open.
> 
> We prove that statistical CTE with full black-box security and superlogarithmic stretch must have superconstant rounds. In the computational setting we prove that with \(N\ge 2\) parties and polynomial stretch:
> 
> One round suffices for CTE under subexponential LWE, even with Universally Composable security against adaptive corruptions.
> 
> One-round CTE is implied by DDH or the hidden subgroup assumption in class groups, with a short, reusable Uniform Random String, and by DCR and QR, with a reusable Structured Reference String.
> 
> One-way functions imply CTE with O(N) rounds, and thus constant-round CTE for any constant number of parties.
> 
> Such results were not previously known even in the two-party setting with standalone, static security. We also extend one-round CTE to sample from any efficient distribution, via strong assumptions including IO.
> 
> Our one-round CTE protocols can be interpreted as explainable variants of classical randomness extractors, wherein a (short) seed and a source instance can be efficiently reverse-sampled given a random output. Such explainable extractors may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_5](https://doi.org/10.1007/978-3-031-58740-5_5)
## Witness Semantic Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#witness-semantic-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#witness-semantic-security)
### Authors
* Paul Lou, UCLA, Los Angeles, CA, USA
* Amit Sahai, UCLA, Los Angeles, CA, USA
* Nathan Manohar, IBM T.J. Watson Research Center, Yorktown Heights, NY, USA
### Abstract
> To date, the strongest notions of security achievable for two-round publicly-verifiable cryptographic proofs for \(\textsf{NP}\) are witness indistinguishability (Dwork-Naor 2000, Groth-Ostrovsky-Sahai 2006), witness hiding (Bitansky-Khurana-Paneth 2019, Kuykendall-Zhandry 2020), and super-polynomial simulation (Pass 2003, Khurana-Sahai 2017). On the other hand, zero-knowledge and even weak zero-knowledge (Dwork-Naor-Reingold-Stockmeyer 1999) are impossible in the two-round publicly-verifiable setting (Goldreich-Oren 1994). This leaves an enormous gap in our theoretical understanding of known achievable security and the impossibility results for two-round publicly-verifiable cryptographic proofs for \(\textsf{NP}\).
> 
> Towards filling this gap, we propose a new and natural notion of security, called witness semantic security, that captures the natural and strong notion that an adversary should not be able to learn any partial information about the prover’s witness beyond what it could learn given only the statement x. Not only does our notion of witness semantic security subsume both witness indistinguishability and witness hiding, but it also has an easily appreciable interpretation.
> 
> Moreover, we show that assuming the subexponential hardness of LWE, there exists a two-round public-coin publicly-verifiable witness semantic secure argument. To our knowledge, this is the strongest form of security known for this setting.
> 
> As a key application of our work, we show that non-interactive zero-knowledge (NIZK) arguments in the common reference string (CRS) model can additionally maintain witness semantic security even when the CRS is maliciously generated. Our work gives the first construction from (subexponential) standard assumptions that achieves a notion stronger than witness-indistinguishability against a malicious CRS authority.
> 
> In order to achieve our results, we give the first construction of a ZAP from subexponential LWE that is adaptively sound. Additionally, we propose a notion of simulation using non-uniform advice about a malicious CRS, which we also believe will be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_6](https://doi.org/10.1007/978-3-031-58740-5_6)
## Garbled Circuit Lookup Tables with Logarithmic Number of Ciphertexts.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#garbled-circuit-lookup-tables-with-logarithmic-number-of-ciphertexts)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#garbled-circuit-lookup-tables-with-logarithmic-number-of-ciphertexts)
### Authors
* David Heath, University of Illinois Urbana-Champaign, Champaign, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, USA
* Lucien K. L. Ng, Georgia Institute of Technology, Atlanta, USA
### Abstract
> Garbled Circuit (GC) is a basic technique for practical secure computation. GC handles Boolean circuits; it consumes significant network bandwidth to transmit encoded gate truth tables, each of which scales with the computational security parameter \(\kappa \). GC optimizations that reduce bandwidth consumption are valuable.
> 
> It is natural to consider a generalization of Boolean two-input one-output gates (represented by 4-row one-column lookup tables, LUTs) to arbitrary N-row m-column LUTs. Known techniques for this do not scale, with naïve size-\(O(Nm\kappa )\) garbled LUT being the most practical approach in many scenarios.
> 
> Our novel garbling scheme – \(\textsf{logrow}\) – implements GC LUTs while sending only a logarithmic in N number of ciphertexts! Specifically, let \(n = \lceil \log _2 N \rceil \). We allow the GC parties to evaluate a LUT for \((n-1)\kappa + nm\kappa + Nm\) bits of communication. \(\textsf{logrow}\) is compatible with modern GC advances, e.g. half gates and free XOR.
> 
> Our work improves state-of-the-art GC handling of several interesting applications, such as privacy-preserving machine learning, floating-point arithmetic, and DFA evaluation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_7](https://doi.org/10.1007/978-3-031-58740-5_7)
## Publicly Verifiable Secret Sharing Over Class Groups and Applications to DKG and YOSO.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#publicly-verifiable-secret-sharing-over-class-groups-and-applications-to-dkg-and-yoso)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#publicly-verifiable-secret-sharing-over-class-groups-and-applications-to-dkg-and-yoso)
### Authors
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
### Abstract
> Publicly Verifiable Secret Sharing (PVSS) allows a dealer to publish encrypted shares of a secret so that parties holding the corresponding decryption keys may later reconstruct it. Both dealing and reconstruction are non-interactive and any verifier can check their validity. PVSS finds applications in randomness beacons, distributed key generation (DKG) and in YOSO MPC (Gentry et al. CRYPTO’21), when endowed with suitable publicly verifiable re-sharing as in YOLO YOSO (Cascudo et al. ASIACRYPT’22).
> 
> We introduce a PVSS scheme over class groups that achieves similar efficiency to state-of-the art schemes that only allow for reconstructing a function of the secret, while our scheme allows the reconstruction of the original secret. Our construction generalizes the DDH-based scheme of YOLO YOSO to operate over class groups, which poses technical challenges in adapting the necessary NIZKs in face of the unknown group order and the fact that efficient NIZKs of knowledge are not as simple to construct in this setting.
> 
> Building on our PVSS scheme’s ability to recover the original secret, we propose two DKG protocols for discrete logarithm key pairs: a biasable 1-round protocol, which improves on the concrete communication/computational complexities of previous works; and a 2-round unbiasable protocol, which improves on the round complexity of previous works. We also add publicly verifiable resharing towards anonymous committees to our PVSS, so that it can be used to efficiently transfer state among committees in the YOSO setting. Together with a recent construction of MPC in the YOSO model based on class groups (Braun et al. CRYPTO’23), this results in the most efficient full realization (i.e. without assuming receiver anonymous channels) of YOSO MPC based on the CDN framework with transparent setup.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_8](https://doi.org/10.1007/978-3-031-58740-5_8)
## Bulletproofs++: Next Generation Confidential Transactions via Reciprocal Set Membership Arguments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#bulletproofs-next-generation-confidential-transactions-via-reciprocal-set-membership-arguments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#bulletproofs-next-generation-confidential-transactions-via-reciprocal-set-membership-arguments)
### Authors
* Liam Eagen, Blockstream Research, Victoria, Canada
* Sanket Kanjalkar, Blockstream Research, Victoria, Canada
* Tim Ruffing, Blockstream Research, Victoria, Canada
* Jonas Nick, Blockstream Research, Victoria, Canada
### Abstract
> Zero-knowledge proofs are a cryptographic cornerstone of privacy-preserving technologies such as “Confidential Transactions” (CT), which aims at hiding monetary amounts in cryptocurrency transactions. Due to its asymptotically logarithmic proof size and transparent setup, most state-of-the-art CT protocols use the Bulletproofs (BP) [8] zero-knowledge proof system for set membership proofs such as range proofs. However, even taking into account recent efficiency improvements, BP comes with a serious overhead in terms of concrete proof size as well as verifier running time and thus puts a large burden on practical deployments of CT and its extensions.
> 
> In this work, we introduce Bulletproofs++ (BP++), a drop-in replacement for BP that improves its concrete efficiency and compactness significantly. As for BP, the security of BP++ relies only on the hardness of the discrete logarithm problem in the random oracle model, and BP++ retains all features of Bulletproofs including transparent setup and support for proof aggregation, multi-party proving and batch verification. Asymptotically, BP++ range proofs require only \(O(n / \log n)\) group scalar multiplications compared to O(n) for BP and BP+.
> 
> At the heart of our construction are novel techniques for permutation and set membership, enabling highly efficient proofs of statements encoded as arithmetic circuits. Concretely, a single BP++ range proof to establish that a committed value is in a 64-bit range (as commonly required by CT) is just 416 bytes over a 256-bit elliptic curve, 38% smaller than an equivalent BP and 27% smaller than BP+. When instantiated on the secp256k1 curve as used in Bitcoin, our benchmarks show that proving is about 5 times faster than BP and verification is about 3 times faster than BP+. When aggregating 32 range proofs, proving and verification are about 9.5 times and 5.5 times faster, respectively.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_9](https://doi.org/10.1007/978-3-031-58740-5_9)
## Perfect Asynchronous MPC with Linear Communication Overhead.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#perfect-asynchronous-mpc-with-linear-communication-overhead)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#perfect-asynchronous-mpc-with-linear-communication-overhead)
### Authors
* Ittai Abraham, Intel Labs, Hillsboro, USA
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Shravani Patil, Indian Institute of Science, Bangalore, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, Bangalore, India
### Abstract
> We study secure multiparty computation in the asynchronous setting with perfect security and optimal resilience (less than one-fourth of the participants are malicious). It has been shown that every function can be computed in this model [Ben-OR, Canetti, and Goldreich, STOC’1993]. Despite 30 years of research, all protocols in the asynchronous setting require \(\varOmega (n^2C)\) communication complexity for computing a circuit with C multiplication gates. In contrast, for nearly 15 years, in the synchronous setting, it has been known how to achieve \({\mathcal {O}}(nC)\) communication complexity (Beerliova and Hirt; TCC 2008). The techniques for achieving this result in the synchronous setting are not known to be sufficient for obtaining an analogous result in the asynchronous setting.
> 
> We close this gap between synchronous and asynchronous secure computation and show the first asynchronous protocol with \({\mathcal {O}}(nC)\) communication complexity for a circuit with C multiplication gates. Linear overhead forms a natural barrier for general secret-sharing-based MPC protocols. Our main technical contribution is an asynchronous weak binding secret sharing that achieves rate-1 communication (i.e., \({\mathcal {O}}(1)\)-overhead per secret). To achieve this goal, we develop new techniques for the asynchronous setting, including the use of trivariate polynomials (as opposed to bivariate polynomials).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_10](https://doi.org/10.1007/978-3-031-58740-5_10)
## Perfect (Parallel) Broadcast in Constant Expected Rounds via Statistical VSS.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#perfect-parallel-broadcast-in-constant-expected-rounds-via-statistical-vss)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#perfect-parallel-broadcast-in-constant-expected-rounds-via-statistical-vss)
### Authors
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Anirudh Chandramouli, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> We study broadcast protocols in the information-theoretic model under optimal conditions, where the number of corruptions t is at most one-third of the parties, n. While worst-case \(\varOmega (n)\) round broadcast protocols are known to be impossible to achieve, protocols with an expected constant number of rounds have been demonstrated since the seminal work of Feldman and Micali [STOC’88]. Communication complexity for such protocols has gradually improved over the years, reaching O(nL) plus expected \(O(n^4\log n)\) for broadcasting a message of size L bits.
> 
> This paper presents a perfectly secure broadcast protocol with expected constant rounds and communication complexity of O(nL) plus expected \(O(n^3 \log ^2n)\) bits. In addition, we consider the problem of parallel broadcast, where n senders, each wish to broadcast a message of size L. We show a parallel broadcast protocol with expected constant rounds and communication complexity of \(O(n^2L)\) plus expected \(O(n^3 \log ^2n)\) bits. Our protocol is optimal (up to expectation) for messages of length \(L \in \varOmega (n \log ^2 n)\).
> 
> Our main contribution is a framework for obtaining perfectly secure broadcast with an expected constant number of rounds from a statistically secure verifiable secret sharing. Moreover, we provide a new statistically secure verifiable secret sharing where the broadcast cost per participant is reduced from \(O(n \log n)\) bits to only \(O(\textsf{poly}\log n)\) bits. All our protocols are adaptively secure.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_11](https://doi.org/10.1007/978-3-031-58740-5_11)
## Fuzzy Private Set Intersection with Large Hyperballs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#fuzzy-private-set-intersection-with-large-hyperballs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#fuzzy-private-set-intersection-with-large-hyperballs)
### Authors
* Aron van Baarsen, Cryptology Group, CWI, Amsterdam, The Netherlands
* Aron van Baarsen, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Traditional private set intersection (PSI) involves a receiver and a sender holding sets X and Y, respectively, with the receiver learning only the intersection \(X\cap Y\). We turn our attention to its fuzzy variant, where the receiver holds \(|X|\) hyperballs of radius \(\delta \) in a metric space and the sender has |Y| points. Representing the hyperballs by their center, the receiver learns the points \(x\in X\) for which there exists \(y\in Y\) such that \(\textsf{dist}(x,y)\le \delta \) with respect to some distance metric. Previous approaches either require general-purpose multi-party computation (MPC) techniques like garbled circuits or fully homomorphic encryption (FHE), leak details about the sender’s precise inputs, support limited distance metrics, or scale poorly with the hyperballs’ volume.
> 
> This work presents the first black-box construction for fuzzy PSI (including other variants such as PSI cardinality, labeled PSI, and circuit PSI), which can handle polynomially large radius and dimension (i.e., a potentially exponentially large volume) in two interaction messages, supporting general \(L_{\textsf{p}\in [1,\infty ]}\) distance, without relying on garbled circuits or FHE. The protocol excels in both asymptotic and concrete efficiency compared to existing works. For security, we solely rely on the assumption that the Decisional Diffie-Hellman (DDH) holds in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_12](https://doi.org/10.1007/978-3-031-58740-5_12)
## Fast Batched Asynchronous Distributed Key Generation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#fast-batched-asynchronous-distributed-key-generation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#fast-batched-asynchronous-distributed-key-generation)
### Authors
* Jens Groth, Nexus, New York, USA
* Victor Shoup, Offchain Labs, New York, USA
### Abstract
> We present new protocols for threshold Schnorr signatures that work in an asynchronous communication setting, providing robustness and optimal resilience. These protocols provide unprecedented performance in terms of communication and computational complexity. In terms of communication complexity, for each signature, a single party must transmit a few dozen group elements and scalars across the network (independent of the size of the signing committee). In terms of computational complexity, the amortized cost for one party to generate a signature is actually less than that of just running the standard Schnorr signing or verification algorithm (at least for moderately sized signing committees, say, up to 100).
> 
> For example, we estimate that with a signing committee of 49 parties, at most 16 of which are corrupt, we can generate 50,000 Schnorr signatures per second (assuming each party can dedicate one standard CPU core and 500 Mbs of network bandwidth to signing). Importantly, this estimate includes both the cost of an offline precomputation phase (which just churns out message independent “presignatures”) and an online signature generation phase. Also, the online signing phase can generate a signature with very little network latency (just one to three rounds, depending on how throughput and latency are balanced).
> 
> To achieve this result, we provide two new innovations. One is a new secret sharing protocol (again, asynchronous, robust, optimally resilient) that allows the dealer to securely distribute shares of a large batch of ephemeral secret keys, and to publish the corresponding ephemeral public keys. To achieve better performance, our protocol minimizes public-key operations, and in particular, is based on a novel technique that does not use the traditional technique based on “polynomial commitments”. The second innovation is a new algorithm to efficiently combine ephemeral public keys contributed by different parties (some possibly corrupt) into a smaller number of secure ephemeral public keys. This new algorithm is based on a novel construction of a so-called “super-invertible matrix” along with a corresponding highly-efficient algorithm for multiplying this matrix by a vector of group elements.
> 
> As protocols for verifiably sharing a secret key with an associated public key and the technology of super-invertible matrices both play a major role in threshold cryptography and multi-party computation, our two new innovations should have applicability well beyond that of threshold Schnorr signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_13](https://doi.org/10.1007/978-3-031-58740-5_13)
## Toward Malicious Constant-Rate 2PC via Arithmetic Garbling.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#toward-malicious-constant-rate-2pc-via-arithmetic-garbling)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#toward-malicious-constant-rate-2pc-via-arithmetic-garbling)
### Authors
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Yibin Yang, Georgia Institute of Technology, Atlanta, USA
### Abstract
> A recent work by Ball, Li, Lin, and Liu [Eurocrypt’23] presented a new instantiation of the arithmetic garbling paradigm introduced by Applebaum, Ishai, and Kushilevitz [FOCS’11]. In particular, Ball et al.’s garbling scheme is the first constant-rate garbled circuit over large enough bounded integer computations, inferring the first constant-round constant-rate secure two-party computation (2PC) over bounded integer computations in the presence of semi-honest adversaries.
> 
> The main source of difficulty in lifting the security of garbling schemes-based protocols to the malicious setting lies in proving the correctness of the underlying garbling scheme. In this work, we analyze the security of Ball et al.’s scheme in the presence of malicious attacks.
> 
> We demonstrate an overflow attack, which is inevitable in this computational model, even if the garbled circuit is fully correct. Our attack follows by defining an adversary, corrupting either the garbler or the evaluator, that chooses a bad input and causes the computation to overflow, thus leaking information about the honest party’s input. By utilizing overflow attacks, we show that 1-bit leakage is necessary for achieving security against a malicious garbler, discarding the possibility of achieving full malicious security in this model. We further demonstrate a wider range of overflow attacks against a malicious evaluator with more than 1 bit of leakage.
> 
> We boost the security level of Ball et al.’s scheme by utilizing two variants of Vector Oblivious Linear Evaluation, denoted by VOLEc and aVOLE. We present the first constant-round constant-rate 2PC protocol over bounded integer computations, in the presence of a malicious garbler with 1-bit leakage and a semi-honest evaluator, in the {VOLEc,aVOLE}-hybrid model and being black-box in the underlying group and ring. Compared to the semi-honest variant, our protocol incurs only a constant factor overhead, both in computation and communication. The constant-round and constant-rate properties hold even in the plain model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_14](https://doi.org/10.1007/978-3-031-58740-5_14)
## Closing the Efficiency Gap Between Synchronous and Network-Agnostic Consensus.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#closing-the-efficiency-gap-between-synchronous-and-network-agnostic-consensus)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#closing-the-efficiency-gap-between-synchronous-and-network-agnostic-consensus)
### Authors
* Giovanni Deligios, ETH Zurich, Zürich, Switzerland
* Mose Mizrahi Erbes, ETH Zurich, Zürich, Switzerland
### Abstract
> In the consensus problem, n parties want to agree on a common value, even if some of them are corrupt and arbitrarily misbehave. If the parties have a common input m, then they must agree on m.
> 
> Protocols solving consensus assume either a synchronous communication network, where messages are delivered within a known time, or an asynchronous network with arbitrary delays. Asynchronous protocols only tolerate \(t_a < n/3\) corrupt parties. Synchronous ones can tolerate \(t_s < n/2\) corruptions with setup, but their security completely breaks down if the synchrony assumptions are violated.
> 
> Network-agnostic consensus protocols, as introduced by Blum, Katz, and Loss [TCC’19], are secure regardless of network conditions, tolerating up to \(t_s\) corruptions with synchrony and \(t_a\) without, under provably optimal assumptions \(t_a \le t_s\) and \(2t_s + t_a < n\). Despite efforts to improve their efficiency, all known network-agnostic protocols fall short of the asymptotic complexity of state-of-the-art purely synchronous protocols.
> 
> In this work, we introduce a novel technique to compile any synchronous and any asynchronous consensus protocols into a network-agnostic one. This process only incurs a small constant number of overhead rounds, so that the compiled protocol matches the optimal round complexity for synchronous protocols. Our compiler also preserves under a variety of assumptions the asymptotic communication complexity of state-of-the-art synchronous and asynchronous protocols. Hence, it closes the current efficiency gap between synchronous and network-agnostic consensus.
> 
> As a plus, our protocols support \(\ell \)-bit inputs, and can be extended to achieve communication complexity \(\mathcal {O}(n^2\kappa + \ell n)\) under the assumptions for which this is known to be possible for purely synchronous protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_15](https://doi.org/10.1007/978-3-031-58740-5_15)
