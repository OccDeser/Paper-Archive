# Eurocrypt 19-2
## Homomorphic Secret Sharing from Lattices Without FHE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#homomorphic-secret-sharing-from-lattices-without-fhe)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#homomorphic-secret-sharing-from-lattices-without-fhe)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Homomorphic secret sharing (HSS) is an analog of somewhat- or fully homomorphic encryption (S/FHE) to the setting of secret sharing, with applications including succinct secure computation, private manipulation of remote databases, and more. While HSS can be viewed as a relaxation of S/FHE, the only constructions from lattice-based assumptions to date build atop specific forms of threshold or multi-key S/FHE. In this work, we present new techniques directly yielding efficient 2-party HSS for polynomial-size branching programs from a range of lattice-based encryption schemes, without S/FHE. More concretely, we avoid the costly key-switching and modulus-reduction steps used in S/FHE ciphertext multiplication, replacing them with a new distributed decryption procedure for performing “restricted” multiplications of an input with a partial computation value. Doing so requires new methods for handling the blowup of “noise” in ciphertexts in a distributed setting, and leverages several properties of lattice-based encryption schemes together with new tricks in share conversion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_1](https://doi.org/10.1007/978-3-030-17656-3_1)
## Improved Bootstrapping for Approximate Homomorphic Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#improved-bootstrapping-for-approximate-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#improved-bootstrapping-for-approximate-homomorphic-encryption)
### Authors
* Hao Chen, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Ilaria Chillotti, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Since Cheon et al. introduced a homomorphic encryption scheme for approximate arithmetic (Asiacrypt ’17), it has been recognized as suitable for important real-life usecases of homomorphic encryption, including training of machine learning models over encrypted data. A follow up work by Cheon et al. (Eurocrypt ’18) described an approximate bootstrapping procedure for the scheme. In this work, we improve upon the previous bootstrapping result. We improve the amortized bootstrapping time per plaintext slot by two orders of magnitude, from \(\sim \)1 s to \(\sim \)0.01 s. To achieve this result, we adopt a smart level-collapsing technique for evaluating DFT-like linear transforms on a ciphertext. Also, we replace the Taylor approximation of the sine function with a more accurate and numerically stable Chebyshev approximation, and design a modified version of the Paterson-Stockmeyer algorithm for fast evaluation of Chebyshev polynomials over encrypted data.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_2](https://doi.org/10.1007/978-3-030-17656-3_2)
## Minicrypt Primitives with Algebraic Structure and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#minicrypt-primitives-with-algebraic-structure-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#minicrypt-primitives-with-algebraic-structure-and-applications)
### Authors
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Navid Alamati, Fujitsu Laboratories of America, Sunnyvale, USA
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, Fujitsu Laboratories of America, Sunnyvale, USA
* Arnab Roy, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, IIT Kharagpur, Kharagpur, India
### Abstract
> Algebraic structure lies at the heart of Cryptomania as we know it. An interesting question is the following: instead of building (Cryptomania) primitives from concrete assumptions, can we build them from simple Minicrypt primitives endowed with some additional algebraic structure? In this work, we affirmatively answer this question by adding algebraic structure to the following Minicrypt primitives:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_3](https://doi.org/10.1007/978-3-030-17656-3_3)
## Attacks only Get Better: How to Break FF3 on Large Domains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#attacks-only-get-better-how-to-break-ff3-on-large-domains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#attacks-only-get-better-how-to-break-ff3-on-large-domains)
### Authors
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
* David Miller, Department of Computer Science, Florida State University, Tallahassee, USA
* Ni Trieu, Department of Computer Science, Oregon State University, Corvallis, USA
### Abstract
> We improve the attack of Durak and Vaudenay (CRYPTO’17) on NIST Format-Preserving Encryption standard FF3, reducing the running time from \(O(N^5)\) to \(O(N^{17/6})\) for domain \(\mathbb {Z}_N \times \mathbb {Z}_N\). Concretely, DV’s attack needs about \(2^{50}\) operations to recover encrypted 6-digit PINs, whereas ours only spends about \(2^{30}\) operations. In realizing this goal, we provide a pedagogical example of how to use distinguishing attacks to speed up slide attacks. In addition, we improve the running time of DV’s known-plaintext attack on 4-round Feistel of domain \(\mathbb {Z}_N \times \mathbb {Z}_N\) from \(O(N^3)\) time to just \(O(N^{5/3})\) time. We also generalize our attacks to a general domain \(\mathbb {Z}_M \times \mathbb {Z}_N\), allowing one to recover encrypted SSNs using about \(2^{50}\) operations. Finally, we provide some proof-of-concept implementations to empirically validate our results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_4](https://doi.org/10.1007/978-3-030-17656-3_4)
## Session Resumption Protocols and Efficient Forward Security for TLS 1.3 0-RTT.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt)
### Authors
* Nimrod Aviram, Tel Aviv University, Tel Aviv, Israel
* Kai Gellert, Paderborn University, Paderborn, Germany
* Tibor Jager, Paderborn University, Paderborn, Germany
### Abstract
> The TLS 1.3 0-RTT mode enables a client reconnecting to a server to send encrypted application-layer data in “0-RTT” (“zero round-trip time”), without the need for a prior interactive handshake. This fundamentally requires the server to reconstruct the previous session’s encryption secrets upon receipt of the client’s first message. The standard techniques to achieve this are Session Caches or, alternatively, Session Tickets. The former provides forward security and resistance against replay attacks, but requires a large amount of server-side storage. The latter requires negligible storage, but provides no forward security and is known to be vulnerable to replay attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_5](https://doi.org/10.1007/978-3-030-17656-3_5)
## An Analysis of NIST SP 800-90A.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#an-analysis-of-nist-sp-800-90a)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#an-analysis-of-nist-sp-800-90a)
### Authors
* Joanne Woodage, Royal Holloway, University of London, Egham, UK
* Dan Shumow, Microsoft Research, Redmond, USA
### Abstract
> We investigate the security properties of the three deterministic random bit generator (DRBG) mechanisms in NIST SP 800-90A [2]. The standard received considerable negative attention due to the controversy surrounding the now retracted \(\mathsf{{DualEC\text {-}DRBG}}\), which appeared in earlier versions. Perhaps because of the attention paid to the DualEC, the other algorithms in the standard have received surprisingly patchy analysis to date, despite widespread deployment. This paper addresses a number of these gaps in analysis, with a particular focus on \(\mathsf{{HASH\text {-}DRBG}}\) and \(\mathsf{{HMAC\text {-}DRBG}}\). We uncover a mix of positive and less positive results. On the positive side, we prove (with a caveat) the robustness [13] of \(\mathsf{{HASH\text {-}DRBG}}\) and \(\mathsf{{HMAC\text {-}DRBG}}\) in the random oracle model (ROM). Regarding the caveat, we show that if an optional input is omitted, then – contrary to claims in the standard—\(\mathsf{{HMAC\text {-}DRBG}}\) does not even achieve the (weaker) property of forward security. We then conduct a more informal and practice-oriented exploration of flexibility in the standard. Specifically, we argue that these DRBGs have the property that partial state leakage may lead security to break down in unexpected ways. We highlight implementation choices allowed by the overly flexible standard that exacerbate both the likelihood, and impact, of such attacks. While our attacks are theoretical, an analysis of two open source implementations of \(\mathsf{{CTR\text {-}DRBG}}\) shows that these potentially problematic implementation choices are made in the real world.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_6](https://doi.org/10.1007/978-3-030-17656-3_6)
## Computationally Volume-Hiding Structured Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#computationally-volume-hiding-structured-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#computationally-volume-hiding-structured-encryption)
### Authors
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Brown University, Providence, USA
### Abstract
> We initiate the study of structured encryption schemes with computationally-secure leakage. Specifically, we focus on the design of volume-hiding encrypted multi-maps; that is, of encrypted multi-maps that hide the response length to computationally-bounded adversaries. We describe the first volume-hiding STE schemes that do not rely on naïve padding; that is, padding all tuples to the same length. Our first construction has efficient query complexity and storage but can be lossy. We show, however, that the information loss can be bounded with overwhelming probability for a large class of multi-maps (i.e., with lengths distributed according to a Zipf distribution). Our second construction is not lossy and can achieve storage overhead that is asymptotically better than naïve padding for Zipf-distributed multi-maps. We also show how to further improve the storage when the multi-map is highly concentrated in the sense that it has a large number of tuples with a large intersection. We achieve these results by leveraging computational assumptions; not just for encryption but, more interestingly, to hide the volumes themselves. Our first construction achieves this using a pseudo-random function whereas our second construction achieves this by relying on the conjectured hardness of the planted densest subgraph problem which is a planted variant of the well-studied densest subgraph problem. This assumption was previously used to design public-key encryptions schemes (Applebaum et al., STOC ’10) and to study the computational complexity of financial products (Arora et al., ICS ’10).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_7](https://doi.org/10.1007/978-3-030-17656-3_7)
## Locality-Preserving Oblivious RAM.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#locality-preserving-oblivious-ram)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#locality-preserving-oblivious-ram)
### Authors
* Gilad Asharov, Cornell/Cornell Tech, New York, USA
* Rafael Pass, Cornell/Cornell Tech, New York, USA
* Elaine Shi, Cornell/Cornell Tech, New York, USA
* T.-H. Hubert Chan, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Kartik Nayak, University of Maryland, College Park, USA
* Ling Ren, MIT, Cambridge, USA
### Abstract
> Oblivious RAMs, introduced by Goldreich and Ostrovsky [JACM’96], compile any RAM program into one that is “memory oblivious”, i.e., the access pattern to the memory is independent of the input. All previous ORAM schemes, however, completely break the locality of data accesses (for instance, by shuffling the data to pseudorandom positions in memory).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_8](https://doi.org/10.1007/978-3-030-17656-3_8)
## Private Anonymous Data Access.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#private-anonymous-data-access)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#private-anonymous-data-access)
### Authors
* Ariel Hamlin, Department of Computer Science, Northeastern University, Boston, MA, USA
* Mor Weiss, Department of Computer Science, Northeastern University, Boston, MA, USA
* Daniel Wichs, Department of Computer Science, Northeastern University, Boston, MA, USA
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
* Mor Weiss, Department of Computer Science, IDC Herzliya, Herzliya, Israel
### Abstract
> We consider a scenario where a server holds a huge database that it wants to make accessible to a large group of clients. After an initial setup phase, clients should be able to read arbitrary locations in the database while maintaining privacy (the server does not learn which locations are being read) and anonymity (the server does not learn which client is performing each read). This should hold even if the server colludes with a subset of the clients. Moreover, the run-time of both the server and the client during each read operation should be low, ideally only poly-logarithmic in the size of the database and the number of clients. We call this notion Private Anonymous Data Access (PANDA). PANDA simultaneously combines aspects of Private Information Retrieval (PIR) and Oblivious RAM (ORAM). PIR has no initial setup, and allows anybody to privately and anonymously access a public database, but the server’s run-time is linear in the data size. On the other hand, ORAM achieves poly-logarithmic server run-time, but requires an initial setup after which only a single client with a secret key can access the database. The goal of PANDA is to get the best of both worlds: allow many clients to privately and anonymously access the database as in PIR, while having an efficient server as in ORAM.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_9](https://doi.org/10.1007/978-3-030-17656-3_9)
## Reversible Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#reversible-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#reversible-proofs-of-sequential-work)
### Authors
* Hamza Abusalah, SBA Research, Vienna, Austria
* Chethan Kamath, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Karen Klein, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Krzysztof Pietrzak, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Michael Walter, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
### Abstract
> Proofs of sequential work (PoSW) are proof systems where a prover, upon receiving a statement \(\chi \) and a time parameter T computes a proof \(\phi (\chi ,T)\) which is efficiently and publicly verifiable. The proof can be computed in T sequential steps, but not much less, even by a malicious party having large parallelism. A PoSW thus serves as a proof that T units of time have passed since \(\chi \) was received.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_10](https://doi.org/10.1007/978-3-030-17656-3_10)
## Incremental Proofs of Sequential Work.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#incremental-proofs-of-sequential-work)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#incremental-proofs-of-sequential-work)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> A proof of sequential work allows a prover to convince a verifier that a certain amount of sequential steps have been computed. In this work we introduce the notion of incremental proofs of sequential work where a prover can carry on the computation done by the previous prover incrementally, without affecting the resources of the individual provers or the size of the proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_11](https://doi.org/10.1007/978-3-030-17656-3_11)
## Tight Proofs of Space and Replication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#tight-proofs-of-space-and-replication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#tight-proofs-of-space-and-replication)
### Authors
* Ben Fisch, Stanford University, Stanford, USA
### Abstract
> We construct a concretely practical proof-of-space (PoS) with arbitrarily tight security based on stacked depth robust graphs and constant-degree expander graphs. A proof-of-space (PoS) is an interactive proof system where a prover demonstrates that it is persistently using space to store information. A PoS is arbitrarily tight if the honest prover uses exactly N space and for any \(\epsilon > 0\) the construction can be tuned such that no adversary can pass verification using less than \((1-\epsilon ) N\) space. Most notably, the degree of the graphs in our construction are independent of \(\epsilon \), and the number of layers is only \(O(\log (1/\epsilon ))\). The proof size is \(O(d/\epsilon )\). The degree d depends on the depth robust graphs, which are only required to maintain \(\varOmega (N)\) depth in subgraphs on 80% of the nodes. Our tight PoS is also secure against parallel attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_12](https://doi.org/10.1007/978-3-030-17656-3_12)
## Founding Secure Computation on Blockchains.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#founding-secure-computation-on-blockchains)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#founding-secure-computation-on-blockchains)
### Authors
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We study the foundations of secure computation in the blockchain-hybrid model, where a blockchain – modeled as a global functionality – is available as an Oracle to all the participants of a cryptographic protocol. We demonstrate both destructive and constructive applications of blockchains:

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_13](https://doi.org/10.1007/978-3-030-17656-3_13)
## Uncovering Algebraic Structures in the MPC Landscape.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#uncovering-algebraic-structures-in-the-mpc-landscape)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#uncovering-algebraic-structures-in-the-mpc-landscape)
### Authors
* Navneet Agarwal, Indian Institute of Technology Bombay, Mumbai, India
* Sanat Anand, Indian Institute of Technology Bombay, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
### Abstract
> A fundamental problem in the theory of secure multi-party computation (MPC) is to characterize functions with more than 2 parties which admit MPC protocols with information-theoretic security against passive corruption. This question has seen little progress since the work of Chor and Ishai (1996), which demonstrated difficulties in resolving it. In this work, we make significant progress towards resolving this question in the important case of aggregating functionalities, in which m parties \(P_1,\dots ,P_m\) hold inputs \(x_1,\dots ,x_m\) and an aggregating party \(P_0\) must learn \(f(x_1,\dots ,x_m)\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_14](https://doi.org/10.1007/978-3-030-17656-3_14)
## Quantum Circuits for the CSIDH: Optimizing Quantum Evaluation of Isogenies.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies)
### Authors
* Daniel J. Bernstein, Department of Computer Science, University of Illinois at Chicago, Chicago, IL, 60607-7045, USA
* Tanja Lange, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Chloe Martindale, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
### Abstract
> Choosing safe post-quantum parameters for the new CSIDH isogeny-based key-exchange system requires concrete analysis of the cost of quantum attacks. The two main contributions to attack cost are the number of queries in hidden-shift algorithms and the cost of each query. This paper analyzes algorithms for each query, introducing several new speedups while showing that some previous claims were too optimistic for the attacker. This paper includes a full computer-verified simulation of its main algorithm down to the bit-operation level.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_15](https://doi.org/10.1007/978-3-030-17656-3_15)
## A Quantum-Proof Non-malleable Extractor - With Application to Privacy Amplification Against Active Quantum Adversaries.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries)
### Authors
* Divesh Aggarwal, Center of Quantum Technologies, and Department of Computer Science, NUS, Singapore, Singapore
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei, 11529, Taiwan
* Han-Hsuan Lin, Department of Computer Science, The University of Texas at Austin, Austin, USA
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
### Abstract
> In privacy amplification, two mutually trusted parties aim to amplify the secrecy of an initial shared secret X in order to establish a shared private key K by exchanging messages over an insecure communication channel. If the channel is authenticated the task can be solved in a single round of communication using a strong randomness extractor; choosing a quantum-proof extractor allows one to establish security against quantum adversaries.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_16](https://doi.org/10.1007/978-3-030-17656-3_16)
## A Note on the Communication Complexity of Multiparty Computation in the Correlated Randomness Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model)
### Authors
* Geoffroy Couteau, KIT, Karlsruhe, Germany
### Abstract
> Secure multiparty computation (\(\mathsf {MPC}\)) addresses the challenge of evaluating functions on secret inputs without compromising their privacy. A central question in multiparty computation is to understand the amount of communication needed to securely evaluate a circuit of size s. In this work, we revisit this fundamental question in the setting of information-theoretically secure \(\mathsf {MPC}\) in the correlated randomness model, where a trusted dealer distributes correlated random coins, independent of the inputs, to all parties before the start of the protocol. This setting is of strong theoretical interest, and has led to the most practically efficient \(\mathsf {MPC}\) protocols known to date.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_17](https://doi.org/10.1007/978-3-030-17656-3_17)
## Degree 2 is Complete for the Round-Complexity of Malicious MPC.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc)
### Authors
* Benny Applebaum, Tel-Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Rotem Tsabary, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> We show, via a non-interactive reduction, that the existence of a secure multi-party computation (MPC) protocol for degree-2 functions implies the existence of a protocol with the same round complexity for general functions. Thus showing that when considering the round complexity of MPC, it is sufficient to consider very simple functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_18](https://doi.org/10.1007/978-3-030-17656-3_18)
## Two Round Information-Theoretic MPC with Malicious Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#two-round-information-theoretic-mpc-with-malicious-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#two-round-information-theoretic-mpc-with-malicious-security)
### Authors
* Prabhanjan Ananth, Massachusetts Institute of Technology, Cambridge, USA
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### Abstract
> We provide the first constructions of two round information-theoretic (IT) secure multiparty computation (MPC) protocols in the plain model that tolerate any \(t<n/2\) malicious corruptions. Our protocols satisfy the strongest achievable standard notions of security in two rounds in different communication models.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_19](https://doi.org/10.1007/978-3-030-17656-3_19)
## Designated-Verifier Pseudorandom Generators, and Their Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#designated-verifier-pseudorandom-generators-and-their-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#designated-verifier-pseudorandom-generators-and-their-applications)
### Authors
* Geoffroy Couteau, KIT, Karlsruhe, Germany
* Dennis Hofheinz, KIT, Karlsruhe, Germany
### Abstract
> We provide a generic construction of non-interactive zero-knowledge (NIZK) schemes. Our construction is a refinement of Dwork and Naor’s (FOCS 2000) implementation of the hidden bits model using verifiable pseudorandom generators (VPRGs). Our refinement simplifies their construction and relaxes the necessary assumptions considerably.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_20](https://doi.org/10.1007/978-3-030-17656-3_20)
## Reusable Designated-Verifier NIZKs for all NP from CDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#reusable-designated-verifier-nizks-for-all-np-from-cdh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#reusable-designated-verifier-nizks-for-all-np-from-cdh)
### Authors
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### Abstract
> Non-interactive zero-knowledge proofs (NIZKs) are a fundamental cryptographic primitive. Despite a long history of research, we only know how to construct NIZKs under a few select assumptions, such as the hardness of factoring or using bilinear maps. Notably, there are no known constructions based on either the computational or decisional Diffie-Hellman (CDH/DDH) assumption without relying on a bilinear map.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_21](https://doi.org/10.1007/978-3-030-17656-3_21)
## Designated Verifier/Prover and Preprocessing NIZKs from Diffie-Hellman Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
### Abstract
> In a non-interactive zero-knowledge (NIZK) proof, a prover can non-interactively convince a verifier of a statement without revealing any additional information. Thus far, numerous constructions of NIZKs have been provided in the common reference string (CRS) model (CRS-NIZK) from various assumptions, however, it still remains a long standing open problem to construct them from tools such as pairing-free groups or lattices. Recently, Kim and Wu (CRYPTO’18) made great progress regarding this problem and constructed the first lattice-based NIZK in a relaxed model called NIZKs in the preprocessing model (PP-NIZKs). In this model, there is a trusted statement-independent preprocessing phase where secret information are generated for the prover and verifier. Depending on whether those secret information can be made public, PP-NIZK captures CRS-NIZK, designated-verifier NIZK (DV-NIZK), and designated-prover NIZK (DP-NIZK) as special cases. It was left as an open problem by Kim and Wu whether we can construct such NIZKs from weak paring-free group assumptions such as DDH. As a further matter, all constructions of NIZKs from Diffie-Hellman (DH) type assumptions (regardless of whether it is over a paring-free or paring group) require the proof size to have a multiplicative-overhead \(|C| \cdot \mathsf {poly}(\kappa )\), where |C| is the size of the circuit that computes the \(\mathbf {NP}\) relation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_22](https://doi.org/10.1007/978-3-030-17656-3_22)
## Building an Efficient Lattice Gadget Toolkit: Subgaussian Sampling and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more)
### Authors
* Nicholas Genise, University of California, San Diego, La Jolla, USA
* Daniele Micciancio, University of California, San Diego, La Jolla, USA
* Yuriy Polyakov, New Jersey Institute of Technology, Newark, USA
### Abstract
> Many advanced lattice cryptography applications require efficient algorithms for inverting the so-called “gadget” matrices, which are used to formally describe a digit decomposition problem that produces an output with specific (statistical) properties. The common gadget inversion problems are the classical (often binary) digit decomposition, subgaussian decomposition, Learning with Errors (LWE) decoding, and discrete Gaussian sampling. In this work, we build and implement an efficient lattice gadget toolkit that provides a general treatment of gadget matrices and algorithms for their inversion/sampling. The main contribution of our work is a set of new gadget matrices and algorithms for efficient subgaussian sampling that have a number of major theoretical and practical advantages over previously known algorithms. Another contribution deals with efficient algorithms for LWE decoding and discrete Gaussian sampling in the Residue Number System (RNS) representation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_23](https://doi.org/10.1007/978-3-030-17656-3_23)
## Approx-SVP in Ideal Lattices with Pre-processing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#approx-svp-in-ideal-lattices-with-pre-processing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#approx-svp-in-ideal-lattices-with-pre-processing)
### Authors
* Alice Pellet-Mary, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Guillaume Hanrot, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
### Abstract
> We describe an algorithm to solve the approximate Shortest Vector Problem for lattices corresponding to ideals of the ring of integers of an arbitrary number field K. This algorithm has a pre-processing phase, whose run-time is exponential in \(\log |\varDelta |\) with \(\varDelta \) the discriminant of K. Importantly, this pre-processing phase depends only on K. The pre-processing phase outputs an “advice”, whose bit-size is no more than the run-time of the query phase. Given this advice, the query phase of the algorithm takes as input any ideal I of the ring of integers, and outputs an element of I which is at most \(\exp (\widetilde{O}((\log |\varDelta |)^{\alpha +1}/n))\) times longer than a shortest non-zero element of I (with respect to the Euclidean norm of its canonical embedding). This query phase runs in time and space \(\exp (\widetilde{O}( (\log |\varDelta |)^{\max (2/3, 1-2\alpha )}))\) in the classical setting, and\(\exp (\widetilde{O}((\log |\varDelta |)^{1-2\alpha }))\) in the quantum setting. The parameter \(\alpha \) can be chosen arbitrarily in [0, 1 / 2]. Both correctness and cost analyses rely on heuristic assumptions, whose validity is consistent with experiments.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_24](https://doi.org/10.1007/978-3-030-17656-3_24)
## The General Sieve Kernel and New Records in Lattice Reduction.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#the-general-sieve-kernel-and-new-records-in-lattice-reduction)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#the-general-sieve-kernel-and-new-records-in-lattice-reduction)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
* Gottfried Herold, ENS Lyon, Laboratoire LIP, Lyon, France
* Elena Kirshanova, ENS Lyon, Laboratoire LIP, Lyon, France
### Abstract
> We propose the General Sieve Kernel (G6K, pronounced /

e.si.ka/), an abstract stateful machine supporting a wide variety of lattice reduction strategies based on sieving algorithms. Using the basic instruction set of this abstract stateful machine, we first give concise formulations of previous sieving strategies from the literature and then propose new ones. We then also give a light variant of BKZ exploiting the features of our abstract stateful machine. This encapsulates several recent suggestions (Ducas at Eurocrypt 2018; Laarhoven and Mariano at PQCrypto 2018) to move beyond treating sieving as a blackbox SVP oracle and to utilise strong lattice reduction as preprocessing for sieving. Furthermore, we propose new tricks to minimise the sieving computation required for a given reduction quality with mechanisms such as recycling vectors between sieves, on-the-fly lifting and flexible insertions akin to Deep LLL and recent variants of Random Sampling Reduction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_25](https://doi.org/10.1007/978-3-030-17656-3_25)
## Misuse Attacks on Post-quantum Cryptosystems.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt%2019-2.md#misuse-attacks-on-post-quantum-cryptosystems)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2019-2.md#misuse-attacks-on-post-quantum-cryptosystems)
### Authors
* Ciprian Băetu, EPFL, 1015, Lausanne, Switzerland
* F. Betül Durak, EPFL, 1015, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, 1015, Lausanne, Switzerland
* Abdullah Talayhan, EPFL, 1015, Lausanne, Switzerland
* Serge Vaudenay, EPFL, 1015, Lausanne, Switzerland
### Abstract
> Many post-quantum cryptosystems which have been proposed in the National Institute of Standards and Technology (NIST) standardization process follow the same meta-algorithm, but in different algebras or different encoding methods. They usually propose two constructions, one being weaker and the other requiring a random oracle. We focus on the weak version of nine submissions to NIST. Submitters claim no security when the secret key is used several times. In this paper, we analyze how easy it is to run a key recovery under multiple key reuse. We mount a classical key recovery under plaintext checking attacks (i.e., with a plaintext checking oracle saying if a given ciphertext decrypts well to a given plaintext) and a quantum key recovery under chosen ciphertext attacks. In the latter case, we assume quantum access to the decryption oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_26](https://doi.org/10.1007/978-3-030-17656-3_26)
