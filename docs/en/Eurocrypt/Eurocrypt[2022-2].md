# Eurocrypt[2022-2]
## Single-Server Private Information Retrieval with Sublinear Amortized Time.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#single-server-private-information-retrieval-with-sublinear-amortized-time)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#single-server-private-information-retrieval-with-sublinear-amortized-time)
### Authors
* Henry Corrigan-Gibbs, MIT, Cambridge, MA, USA
* Alexandra Henzinger, MIT, Cambridge, MA, USA
* Dmitry Kogan, Fordefi, Tel Aviv, Israel
### Abstract
> We construct new private-information-retrieval protocols in the single-server setting. Our schemes allow a client to privately fetch a sequence of database records from a server, while the server answers each query in average time sublinear in the database size. Specifically, we introduce the first single-server private-information-retrieval schemes that have sublinear amortized server time, require sublinear additional storage, and allow the client to make her queries adaptively. Our protocols rely only on standard cryptographic assumptions (decision Diffie-Hellman, quadratic residuosity, learning with errors, etc.). They work by having the client first fetch a small “hint” about the database contents from the server. Generating this hint requires server time linear in the database size. Thereafter, the client can use the hint to make a bounded number of adaptive queries to the server, which the server answers in sublinear time—yielding sublinear amortized cost. Finally, we give lower bounds proving that our most efficient scheme is optimal with respect to the trade-off it achieves between server online time and client storage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_1](https://doi.org/10.1007/978-3-031-07085-3_1)
## Anamorphic Encryption: Private Communication Against a Dictator.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#anamorphic-encryption-private-communication-against-a-dictator)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#anamorphic-encryption-private-communication-against-a-dictator)
### Authors
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York City, USA
### Abstract
> Cryptosystems have been developed over the years under the typical prevalent setting which assumes that the receiver’s key is kept secure from the adversary, and that the choice of the message to be sent is freely performed by the sender and is kept secure from the adversary as well. Under these fundamental and basic operational assumptions, modern Cryptography has flourished over the last half a century or so, with amazing achievements: New systems (including public-key Cryptography), beautiful and useful models (including security definitions such as semantic security), and new primitives (such as zero-knowledge proofs) have been developed. Furthermore, these fundamental achievements have been translated into actual working systems, and span many of the daily human activities over the Internet.
> 
> However, in recent years, there is an overgrowing pressure from many governments to allow the government itself access to keys and messages of encryption systems (under various names: escrow encryption, emergency access, communication decency acts, etc.). Numerous non-direct arguments against such policies have been raised, such as “the bad guys can utilize other encryption system” so all other cryptosystems have to be declared illegal, or that “allowing the government access is an ill-advised policy since it creates a natural weak systems security point, which may attract others (to masquerade as the government).” It has remained a fundamental open issue, though, to show directly that the above mentioned efforts by a government (called here “a dictator” for brevity) which mandate breaking of the basic operational assumption (and disallowing other cryptosystems), is, in fact, a futile exercise. This is a direct technical point which needs to be made and has not been made to date.
> 
> In this work, as a technical demonstration of the futility of the dictator’s demands, we invent the notion of “Anamorphic Encryption” which shows that even if the dictator gets the keys and the messages used in the system (before anything is sent) and no other system is allowed, there is a covert way within the context of well established public-key cryptosystems for an entity to immediately (with no latency) send piggybacked secure messages which are, in spite of the stringent dictator conditions, hidden from the dictator itself! We feel that this may be an important direct technical argument against the nature of governments’ attempts to police the use of strong cryptographic systems, and we hope to stimulate further works in this direction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_2](https://doi.org/10.1007/978-3-031-07085-3_2)
## A PCP Theorem for Interactive Proofs and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#a-pcp-theorem-for-interactive-proofs-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#a-pcp-theorem-for-interactive-proofs-and-applications)
### Authors
* Gal Arnon, Weizmann Institute, Rehovot, Israel
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> The celebrated PCP Theorem states that any language in \(\mathrm {NP}\) can be decided via a verifier that reads O(1) bits from a polynomially long proof. Interactive oracle proofs (IOP), a generalization of PCPs, allow the verifier to interact with the prover for multiple rounds while reading a small number of bits from each prover message. While PCPs are relatively well understood, the power captured by IOPs (beyond \(\mathrm {NP}\)) has yet to be fully explored.
> 
> We present a generalization of the PCP theorem for interactive languages. We show that any language decidable by a k(n)-round IP has a k(n)-round public-coin IOP, where the verifier makes its decision by reading only O(1) bits from each (polynomially long) prover message and O(1) bits from each of its own (random) messages to the prover.
> 
> Our result and the underlying techniques have several applications. We get a new hardness of approximation result for a stochastic satisfiability problem, we show IOP-to-IOP transformations that previously were known to hold only for IPs, and we formulate a new notion of PCPs (index-decodable PCPs) that enables us to obtain a commit-and-prove SNARK in the random oracle model for nondeterministic computations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_3](https://doi.org/10.1007/978-3-031-07085-3_3)
## Group Signatures and More from Isogenies and Lattices: Generic, Simple, and Efficient.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#group-signatures-and-more-from-isogenies-and-lattices-generic-simple-and-efficient)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#group-signatures-and-more-from-isogenies-and-lattices-generic-simple-and-efficient)
### Authors
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
* Ward Beullens, IBM Research, Zurich, Switzerland
* Samuel Dobson, University of Auckland, Auckland, New Zealand
* Yi-Fu Lai, University of Auckland, Auckland, New Zealand
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Federico Pintore, Department of Mathematics, University of Bari, Bari, Italy
### Abstract
> We construct an efficient dynamic group signature (or more generally an accountable ring signature) from isogeny and lattice assumptions. Our group signature is based on a simple generic construction that can be instantiated by cryptographically hard group actions such as the CSIDH group action or an MLWE-based group action. The signature is of size \(O(\log N)\), where N is the number of users in the group. Our idea builds on the recent efficient OR-proof by Beullens, Katsumata, and Pintore (Asiacrypt’20), where we efficiently add a proof of valid ciphertext to their OR-proof and further show that the resulting non-interactive zero-knowledge proof system is online extractable.
> 
> Our group signatures satisfy more ideal security properties compared to previously known constructions, while simultaneously having an attractive signature size. The signature size of our isogeny-based construction is an order of magnitude smaller than all previously known post-quantum group signatures (e.g., 6.6 KB for 64 members). In comparison, our lattice-based construction has a larger signature size (e.g., either 126 KB or 89 KB for 64 members depending on the satisfied security property). However, since the \(O(\cdot )\)-notation hides a very small constant factor, it remains small even for very large group sizes, say \(2^{20}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_4](https://doi.org/10.1007/978-3-031-07085-3_4)
## Asymmetric PAKE with Low Computation and communication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#asymmetric-pake-with-low-computation-and-communication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#asymmetric-pake-with-low-computation-and-communication)
### Authors
* Bruno Freitas Dos Santos, University of California, Irvine, USA
* Yanqi Gu, University of California, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
### Abstract
> In Crypto’21 Gu, Jarecki, and Krawczyk [25] showed an asymmetric password authenticated key exchange protocol (aPAKE) whose computational cost matches (symmetric) password authenticated key exchange (PAKE) and plain (i.e. unauthenticated) key exchange (KE). However, this minimal-cost aPAKE did not match prior aPAKE’s in round complexity, using 4 rounds assuming the client initiates compared to 2 rounds in an aPAKE of Bradley et al. [13].
> 
> In this paper we show two aPAKE protocols (but not strong aPAKEs like [13, 30]), which achieve optimal computational cost and optimal round complexity. Our protocols can be seen as variants of the Encrypted Key Exchange (EKE) compiler of Bellovin and Merritt [7], which creates password-authenticated key exchange by password-encrypting messages in a key exchange protocol. Whereas Bellovin and Merritt used this method to construct a PAKE by applying password-encryption to KE messages, we construct an aPAKE by password-encrypting messages of a unilaterally authenticated Key Exchange (ua-KE). We present two versions of this compiler. The first uses salted password hash and takes 2 rounds if the server initiates. The second uses unsalted password hash and takes a single simultaneous flow, thus simultaneously matching the minimal computational cost and the minimal round complexity of PAKE and KE.
> 
> We analyze our aPAKE protocols assuming an Ideal Cipher (IC) on a group, and we analyze them as modular constructions from ua-KE realized via a universally composable Authenticated Key Exchange where the server uses one-time keys (otk-AKE). We also show that one-pass variants of 3DH and HMQV securely realize otk-AKE in the ROM. Interestingly, the two resulting concrete aPAKE’s use the exact same protocol messages as variants of EKE, and the only difference between the symmetric PAKE (EKE) and asymmetric PAKE (our protocols) is in the key derivation equation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_5](https://doi.org/10.1007/978-3-031-07085-3_5)
## Batch-OT with Optimal Rate.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#batch-ot-with-optimal-rate)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#batch-ot-with-optimal-rate)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Pedro Branco, IT, IST - University of Lisbon, Lisbon, Portugal
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> We show that it is possible to perform n independent copies of 1-out-of-2 oblivious transfer in two messages, where the communication complexity of the receiver and sender (each) is \(n(1+o(1))\) for sufficiently large n. Note that this matches the information-theoretic lower bound. Prior to this work, this was only achievable by using the heavy machinery of rate-1 fully homomorphic encryption (Rate-1 FHE, Brakerski et al., TCC 2019).
> 
> To achieve rate-1 both on the receiver’s and sender’s end, we use the LPN assumption, with slightly sub-constant noise rate \(1/m^{\epsilon }\) for any \(\epsilon >0\) together with either the DDH, QR or LWE assumptions. In terms of efficiency, our protocols only rely on linear homomorphism, as opposed to the FHE-based solution which inherently requires an expensive “bootstrapping” operation. We believe that in terms of efficiency we compare favorably to existing batch-OT protocols, while achieving superior communication complexity. We show similar results for Oblivious Linear Evaluation (OLE).
> 
> For our DDH-based solution we develop a new technique that may be of independent interest. We show that it is possible to “emulate” the binary group \(\mathbb {Z}_2\) (or any other small-order group) inside a prime-order group \(\mathbb {Z}_p\) in a function-private manner. That is, \(\mathbb {Z}_2\) operations are mapped to \(\mathbb {Z}_p\) operations such that the outcome of the latter do not reveal additional information beyond the \(\mathbb {Z}_2\) outcome. Our encoding technique uses the discrete Gaussian distribution, which to our knowledge was not done before in the context of DDH.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_6](https://doi.org/10.1007/978-3-031-07085-3_6)
## Adaptively Secure Computation for RAM Programs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#adaptively-secure-computation-for-ram-programs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#adaptively-secure-computation-for-ram-programs)
### Authors
* Laasya Bangalore, Georgetown University, Washington, USA
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Oxana Poburinnaya, Ligero, Inc., Rochester, USA
### Abstract
> In this work, we study the communication complexity of secure multiparty computation under minimal assumptions in the presence of an adversary that can adaptively corrupt all parties eventually. Specifically, we are interested in understanding the complexity when modeling the underlying function as a RAM program. Under minimal assumptions, the work of Canetti et al. (STOC 2017) and Benhamouda et al. (TCC 2018) give protocols whose communication complexity grows quadratically in the circuit size when the computation is expressed as a Boolean circuit. In this work, we obtain the first two-round two-party computation protocol, which is secure against adaptive adversaries who can adaptively corrupt all parties where the communication complexity is proportional to the square of the RAM complexity of the function up to polylogarithmic factors assuming the existence of non-committing encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_7](https://doi.org/10.1007/978-3-031-07085-3_7)
## Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#optimal-broadcast-encryption-and-cp-abe-from-evasive-lattice-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#optimal-broadcast-encryption-and-cp-abe-from-evasive-lattice-assumptions)
### Authors
* Hoeteck Wee, NTT Research and ENS, Paris, France
### Abstract
> We present a new, simple candidate broadcast encryption scheme for N users with parameter size \(\textsf {poly}(\log N)\). We prove security of our scheme under a non-standard variant of the LWE assumption where the distinguisher additionally receives short Gaussian pre-images while avoiding zeroizing attacks. This yields the first candidate optimal broadcast encryption that is plausibly post-quantum secure, and enjoys a security reduction to a simple assumption. As a secondary contribution, we present a candidate ciphertext-policy attribute-based encryption (CP-ABE) scheme for circuits of a-priori bounded polynomial depth where the parameter size is independent of the circuit size, and prove security under an additional non-standard assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_8](https://doi.org/10.1007/978-3-031-07085-3_8)
## Embedding the UC Model into the IITM Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#embedding-the-uc-model-into-the-iitm-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#embedding-the-uc-model-into-the-iitm-model)
### Authors
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Céline Chevalier, CRED, Paris-Panthéon-Assas University, Paris, France
### Abstract
> Universal Composability is a widely used concept for the design and analysis of protocols. Since Canetti’s original UC model and the model by Pfitzmann and Waidner several different models for universal composability have been proposed, including, for example, the IITM model, GNUC, CC, but also extensions and restrictions of the UC model, such as JUC, GUC, and SUC. These were motivated by the lack of expressivity of existing models, ease of use, or flaws in previous models. Cryptographers choose between these models based on their needs at hand (e.g., support for joint state and global state) or simply their familiarity with a specific model. While all models follow the same basic idea, there are huge conceptually differences, which raises fundamental and practical questions: (How) do the concepts and results proven in one model relate to those in another model? Do the different models and the security notions formulated therein capture the same classes of attacks? Most importantly, can cryptographers re-use results proven in one model in another model, and if so, how?
> 
> In this paper, we initiate a line of research with the aim to address this lack of understanding, consolidate the space of models, and enable cryptographers to re-use results proven in other models. As a start, here we focus on Canetti’s prominent UC model and the IITM model proposed by Küsters et al. The latter is an interesting candidate for comparison with the UC model since it has been used to analyze a wide variety of protocols, supports a very general protocol class and provides, among others, seamless treatment of protocols with shared state, including joint and global state. Our main technical contribution is an embedding of the UC model into the IITM model showing that all UC protocols, security and composition results carry over to the IITM model. Hence, protocol designers can profit from the features of the IITM model while being able to use all their results proven in the UC model. We also show that, in general, one cannot embed the full IITM model into the UC model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_9](https://doi.org/10.1007/978-3-031-07085-3_9)
## Zero-Knowledge IOPs with Linear-Time Prover and Polylogarithmic-Time Verifier.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#zero-knowledge-iops-with-linear-time-prover-and-polylogarithmic-time-verifier)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#zero-knowledge-iops-with-linear-time-prover-and-polylogarithmic-time-verifier)
### Authors
* Jonathan Bootle, IBM Research, Zurich, Switzerland
* Alessandro Chiesa, École polytechnique fédérale de Lausanne, Lausanne, Switzerland
* Alessandro Chiesa, University of California, Berkeley, Berkeley, USA
* Siqi Liu, University of California, Berkeley, Berkeley, USA
### Abstract
> Interactive oracle proofs (IOPs) are a multi-round generalization of probabilistically checkable proofs that play a fundamental role in the construction of efficient cryptographic proofs.
> 
> We present an IOP that simultaneously achieves the properties of zero knowledge, linear-time proving, and polylogarithmic-time verification. We construct a zero-knowledge IOP where, for the satisfiability of an N-gate arithmetic circuit over any field of size \(\varOmega (N)\), the prover uses O(N) field operations and the verifier uses \({\mathsf {polylog}}(N)\) field operations (with proof length O(N) and query complexity \({\mathsf {polylog}}(N)\)). Polylogarithmic verification is achieved in the holographic setting for every circuit (the verifier has oracle access to a linear-time-computable encoding of the circuit whose satisfiability is being proved).
> 
> Our result implies progress on a basic goal in the area of efficient zero knowledge. Via a known transformation, we obtain a zero knowledge argument system where the prover runs in linear time and the verifier runs in polylogarithmic time; the construction is plausibly post-quantum and only makes a black-box use of lightweight cryptography (collision-resistant hash functions).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_10](https://doi.org/10.1007/978-3-031-07085-3_10)
## Non-Interactive Zero-Knowledge Proofs with Fine-Grained Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#non-interactive-zero-knowledge-proofs-with-fine-grained-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#non-interactive-zero-knowledge-proofs-with-fine-grained-security)
### Authors
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> We construct the first non-interactive zero-knowledge (NIZK) proof systems in the fine-grained setting where adversaries’ resources are bounded and honest users have no more resources than an adversary. More concretely, our setting is the \(\mathsf {NC^1}\)-fine-grained setting, namely, all parties (including adversaries and honest participants) are in \(\mathsf {NC^1}\).
> 
> Our NIZK systems are for circuit satisfiability (SAT) under the worst-case assumption, \(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\) . As technical contributions, we propose two approaches to construct NIZKs in the \(\mathsf {NC^1}\)-fine-grained setting. In stark contrast to the classical Fiat-Shamir transformation, both our approaches start with a simple \(\varSigma \)-protocol and transform it into NIZKs for circuit SAT without random oracles. Additionally, our second approach firstly proposes a fully homomorphic encryption (FHE) scheme in the fine-grained setting, which was not known before, as a building block. Compared with the first approach, the resulting NIZK only supports circuits with constant multiplicative depth, while its proof size is independent of the statement circuit size.
> 
> Extending our approaches, we obtain two NIZK systems in the uniform reference string model and two non-interactive zaps (namely, non-interactive witness-indistinguishability proof systems in the plain model). While the previous constructions from Ball, Dachman-Soled, and Kulkarni (CRYPTO 2020) require provers to run in polynomial-time, our constructions are the first one with provers in \(\mathsf {NC^1}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_11](https://doi.org/10.1007/978-3-031-07085-3_11)
## On Succinct Non-interactive Arguments in Relativized Worlds.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-succinct-non-interactive-arguments-in-relativized-worlds)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-succinct-non-interactive-arguments-in-relativized-worlds)
### Authors
* Megan Chen, Boston University, Boston, MA, USA
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Nicholas Spooner, University of Warwick, Coventry, UK
### Abstract
> Succinct non-interactive arguments of knowledge (SNARKs) are cryptographic proofs with strong efficiency properties. Applications of SNARKs often involve proving computations that include the SNARK verifier, a technique called recursive composition. Unfortunately, SNARKs with desirable features such as a transparent (public-coin) setup are known only in the random oracle model (ROM). In applications this oracle must be heuristically instantiated and used in a non-black-box way.
> 
> In this paper we identify a natural oracle model, the low-degree random oracle model, in which there exist transparent SNARKs for all NP computations relative to this oracle. Informally, letting \(\mathcal {O}\) be a low-degree encoding of a random oracle, and assuming the existence of (standard-model) collision-resistant hash functions, there exist SNARKs relative to \(\mathcal {O}\) for all languages in \(\mathsf {NP}^{\mathcal {O}}\). Such a SNARK can directly prove a computation about its own verifier.
> 
> To analyze this model, we introduce a more general framework, the linear code random oracle model (LCROM).
> 
> We show how to obtain SNARKs in the LCROM for computations that query the oracle, given an accumulation scheme for oracle queries. Then we construct such an accumulation scheme for the special case of a low degree random oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_12](https://doi.org/10.1007/978-3-031-07085-3_12)
## Families of SNARK-Friendly 2-Chains of Elliptic Curves.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#families-of-snark-friendly-2-chains-of-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#families-of-snark-friendly-2-chains-of-elliptic-curves)
### Authors
* Youssef El Housni, ConsenSys, gnark, Paris, France
* Youssef El Housni, LIX, CNRS, École Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Youssef El Housni, Inria, Saclay, France
* Aurore Guillevic, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Aurore Guillevic, Aarhus University, Aarhus, Denmark
### Abstract
> At CANS’20, El Housni and Guillevic introduced a new 2-chain of pairing-friendly elliptic curves for recursive zero-knowledge Succinct Non-interactive ARguments of Knowledge (zk-SNARKs) made of the former BLS12-377 curve (a Barreto–Lynn–Scott curve over a 377-bit prime field) and the new BW6-761 curve (a Brezing–Weng curve of embedding degree 6 over a 761-bit prime field). First we generalise the curve construction, the pairing formulas (\(e :\mathbb G_1 \times \mathbb G_2 \rightarrow \mathbb G_T\)) and the group operations to any BW6 curve defined on top of any BLS12 curve, forming a family of 2-chain pairing-friendly curves.
> 
> Second, we investigate other possible 2-chain families made on top of the BLS12 and BLS24 curves. We compare BW6 to Cocks–Pinch curves of higher embedding degrees 8 and 12 (CP8, CP12) at the 128-bit security level. We derive formulas for efficient optimal ate and optimal Tate pairings on our new CP curves. We show that for both BLS12 and BLS24, the BW6 construction always gives the fastest pairing and curve arithmetic compared to Cocks-Pinch curves. Finally, we suggest a short list of curves suitable for Groth16 and KZG-based universal SNARKs and present an optimized implementation of these curves. Based on Groth16 and PlonK (a KZG-based SNARK) implementations in the gnark ecosystem, we obtain that the BLS12-377/BW6-761 pair is optimized for the former while the BLS24-315/BW6-672 pair is optimized for the latter.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_13](https://doi.org/10.1007/978-3-031-07085-3_13)
## Fiat-Shamir Bulletproofs are Non-Malleable (in the Algebraic Group Model).
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#fiat-shamir-bulletproofs-are-non-malleable-in-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#fiat-shamir-bulletproofs-are-non-malleable-in-the-algebraic-group-model)
### Authors
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Zürich, Switzerland
### Abstract
> Bulletproofs (Bünz et al. IEEE S&P 2018) are a celebrated ZK proof system that allows for short and efficient proofs, and have been implemented and deployed in several real-world systems.
> 
> In practice, they are most often implemented in their non-interactive version obtained using the Fiat-Shamir transform, despite the lack of a formal proof of security for this setting.
> 
> Prior to this work, there was no evidence that malleability attacks were not possible against Fiat-Shamir Bulletproofs. Malleability attacks can lead to very severe vulnerabilities, as they allow an adversary to forge proofs re-using or modifying parts of the proofs provided by the honest parties.
> 
> In this paper, we show for the first time that Bulletproofs (or any other similar multi-round proof system satisfying some form of weak unique response property) achieve simulation-extractability in the algebraic group model.
> 
> This implies that Fiat-Shamir Bulletproofs are non-malleable.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_14](https://doi.org/10.1007/978-3-031-07085-3_14)
## Gemini: Elastic SNARKs for Diverse Environments.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#gemini-elastic-snarks-for-diverse-environments)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#gemini-elastic-snarks-for-diverse-environments)
### Authors
* Jonathan Bootle, IBM Research, Zurich, Switzerland
* Alessandro Chiesa, École polytechnique fédérale de Lausanne, Lausanne, Switzerland
* Alessandro Chiesa, University of California, Berkeley, Berkeley, USA
* Yuncong Hu, University of California, Berkeley, Berkeley, USA
* Michele Orrú, University of California, Berkeley, Berkeley, USA
### Abstract
> We introduce a new class of succinct arguments, that we call elastic. Elastic SNARKs allow the prover to allocate different resources (such as memory and time) depending on the execution environment and the statement to prove. The resulting output is independent of the prover’s configuration. To study elastic SNARKs, we extend the streaming paradigm of [Block et al., TCC’20]. We provide a definitional framework for elastic polynomial interactive oracle proofs for R1CS instances and design a compiler which transforms an elastic PIOP into a preprocessing argument system that supports streaming or random access to its inputs. Depending on the configuration, the prover will choose different trade-offs for time (either linear, or quasilinear) and memory (either linear, or logarithmic). We prove the existence of elastic SNARKS by presenting Gemini, a novel FFT-free preprocessing argument. We prove its security and develop a proof-of-concept implementation in Rust based on the arkworks framework. We provide benchmarks for large R1CS instances of tens of billions of gates on a single machine.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_15](https://doi.org/10.1007/978-3-031-07085-3_15)
## Stacking Sigmas: A Framework to Compose $\varSigma $-Protocols for Disjunctions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#stacking-sigmas-a-framework-to-compose-varsigma-protocols-for-disjunctions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#stacking-sigmas-a-framework-to-compose-varsigma-protocols-for-disjunctions)
### Authors
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Gabriel Kaptchuk, Boston University, Boston, USA
### Abstract
> Zero-Knowledge (ZK) Proofs for disjunctive statements have been a focus of a long line of research. Classical results such as Cramer et al. [CRYPTO’94] and Abe et al. [AC’02] design generic compilers that transform certain classes of ZK proofs into ZK proofs for disjunctive statements. However, communication complexity of the resulting protocols in these results ends up being proportional to the complexity of proving all clauses in the disjunction. More recently, Heath et al. [EC’20] exploited special properties of garbled circuits to construct efficient ZK proofs for disjunctions, where the proof size is only proportional to the length of the largest clause in the disjunction. However, these techniques do not appear to generalize beyond garbled circuits.
> 
> In this work, we focus on achieving the best of both worlds. We design a general framework that compiles a large class of unmodified \(\varSigma \)-protocols, each for an individual statement, into a new \(\varSigma \)-protocol that proves a disjunction of these statements. Our framework can be used both when each clause is proved with the same \(\varSigma \)-protocol and when different \(\varSigma \)-protocols are used for different clauses. The resulting \(\varSigma \)-protocol is concretely efficient and has communication complexity proportional to the communication required by the largest clause, with additive terms that are only logarithmic in the number of clauses.
> 
> We show that our compiler can be applied to many well-known \(\varSigma \)-protocols, including classical protocols (e.g. Schnorr [JC’91] and Guillou-Quisquater [CRYPTO’88]) and modern MPC-in-the-head protocols such as the recent work of Katz, Kolesnikov and Wang [CCS’18] and the Ligero protocol of Ames et al. [CCS’17]. Finally, since all of the protocols in our class can be made non-interactive in the random oracle model using the Fiat-Shamir transform, our result yields the first generic non-interactive zero-knowledge protocol for disjunctions where the communication only depends on the size of the largest clause.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_16](https://doi.org/10.1007/978-3-031-07085-3_16)
## One-Shot Fiat-Shamir-Based NIZK Arguments of Composite Residuosity and Logarithmic-Size Ring Signatures in the Standard Model.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#one-shot-fiat-shamir-based-nizk-arguments-of-composite-residuosity-and-logarithmic-size-ring-signatures-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#one-shot-fiat-shamir-based-nizk-arguments-of-composite-residuosity-and-logarithmic-size-ring-signatures-in-the-standard-model)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, Australia
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Ottignies-Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York, USA
### Abstract
> The standard model security of the Fiat-Shamir transform has been an active research area for many years. In breakthrough results, Canetti et al. (STOC’19) and Peikert-Shiehian (Crypto’19) showed that, under the Learning-With-Errors (\(\mathsf {LWE}_{}\)) assumption, it provides soundness by applying correlation-intractable (CI) hash functions to so-called trapdoor \(\varSigma \)-protocols. In order to be compatible with CI hash functions based on standard \(\mathsf {LWE}_{}\) assumptions with polynomial approximation factors, all known such protocols have been obtained via parallel repetitions of a basic protocol with binary challenges. In this paper, we consider languages related to Paillier’s composite residuosity assumption (\(\mathsf {DCR}\)) for which we give the first trapdoor \(\varSigma \)-protocols providing soundness in one shot, via exponentially large challenge spaces. This improvement is analogous to the one enabled by Schnorr over the original Fiat-Shamir protocol in the random oracle model. Using the correlation-intractable hash function paradigm, we then obtain simulation-sound NIZK arguments showing that an element of \(\mathbb {Z}_{N^2}^*\) is a composite residue, which opens the door to space-efficient applications in the standard model. As a concrete example, we build logarithmic-size ring signatures (assuming a common reference string) with the shortest signature length among schemes based on standard assumptions in the standard model. We prove security under the \(\mathsf {DCR}\) and \(\mathsf {LWE}_{}\) assumptions, while keeping the signature size comparable with that of random-oracle-based schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_17](https://doi.org/10.1007/978-3-031-07085-3_17)
## SNARGs for P from Sub-exponential DDH and QR.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#snargs-for-p-from-sub-exponential-ddh-and-qr)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#snargs-for-p-from-sub-exponential-ddh-and-qr)
### Authors
* James Hulett, University of Illinois, Urbana-Champaign, USA
* Ruta Jawale, University of Illinois, Urbana-Champaign, USA
* Dakshita Khurana, University of Illinois, Urbana-Champaign, USA
* Akshayaram Srinivasan, University of Illinois, Urbana-Champaign, USA
* James Hulett, Tata Institute of Fundamental Research, Bengaluru, India
* Ruta Jawale, Tata Institute of Fundamental Research, Bengaluru, India
* Dakshita Khurana, Tata Institute of Fundamental Research, Bengaluru, India
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### Abstract
> We obtain publicly verifiable Succinct Non-Interactive Arguments (SNARGs) for arbitrary deterministic computations and bounded space non-deterministic computation from standard group-based assumptions, without relying on pairings. In particular, assuming the sub-exponential hardness of both the Decisional Diffie-Hellman (DDH) and Quadratic Residuosity (QR) assumptions, we obtain the following results, where n denotes the length of the instance:
> 
> 1. A SNARG for any language that can be decided in non-deterministic time T and space S with communication complexity and verifier runtime \((n+S) \cdot T^{o(1)}\).
> 
> 2. A SNARG for any language that can be decided in deterministic time T with communication complexity and verifier runtime \(n \cdot T^{o(1)}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_18](https://doi.org/10.1007/978-3-031-07085-3_18)
## Optimal Tightness for Chain-Based Unique Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#optimal-tightness-for-chain-based-unique-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#optimal-tightness-for-chain-based-unique-signatures)
### Authors
* Fuchun Guo, Institute of Cybersecurity and Cryptology (iC²), School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology (iC²), School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### Abstract
> Unique signatures are digital signatures with exactly one unique and valid signature for each message. The security reduction for most unique signatures has a natural reduction loss (in the existentially unforgeable against chosen-message attacks, namely EUF-CMA, security model under a non-interactive hardness assumption). In Crypto 2017, Guo et al. proposed a particular chain-based unique signature scheme where each unique signature is composed of n BLS signatures computed sequentially like a blockchain. Under the computational Diffie-Hellman assumption, their reduction loss is \(n\cdot q_H^{1/n}\) for \(q_H\) hash queries and it is logarithmically tight when \(n=\log {q_H}\). However, it is currently unknown whether a better reduction than logarithmical tightness for the chain-based unique signatures exists.
> 
> We show that the proposed chain-based unique signature scheme by Guo et al. must have the reduction loss \(q^{1/n}\) for q signature queries when each unique signature consists of n BLS signatures. We use a meta reduction to prove this lower bound in the EUF-CMA security model under any non-interactive hardness assumption, and the meta-reduction is also applicable in the random oracle model. We also give a security reduction with reduction loss \(4\cdot q^{1/n}\) for the chain-based unique signature scheme (in the EUF-CMA security model under the CDH assumption). This improves significantly on previous reduction loss \(n\cdot q_H^{1/n}\) that is logarithmically tight at most. The core of our reduction idea is a non-uniform simulation that is specially invented for the chain-based unique signature construction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_19](https://doi.org/10.1007/978-3-031-07085-3_19)
## On Building Fine-Grained One-Way Functions from Strong Average-Case Hardness.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-building-fine-grained-one-way-functions-from-strong-average-case-hardness)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-building-fine-grained-one-way-functions-from-strong-average-case-hardness)
### Authors
* Chris Brzuska, Aalto University, Espoo, Finland
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
### Abstract
> Constructing one-way functions from average-case hardness is a long-standing open problem. A positive result would exclude Pessiland (Impagliazzo ’95) and establish a highly desirable win-win situation: either (symmetric) cryptography exists unconditionally, or all \(\mathsf {NP}\) problems can be solved efficiently on the average. Motivated by the lack of progress on this seemingly very hard question, we initiate the investigation of weaker yet meaningful candidate win-win results of the following type: either there are fine-grained one-way functions (FGOWF), or nontrivial speedups can be obtained for all \(\mathsf {NP} \) problems on the average. FGOWFs only require a fixed polynomial gap (as opposed to superpolynomial) between the running time of the function and the running time of an inverter. We obtain three main results:
> 
> Construction. We show that if there is an \(\mathsf {NP} \) language having a very strong form of average-case hardness, which we call block finding hardness, then FGOWF exist. We provide heuristic support for this very strong average-case hardness notion by showing that it holds for a random language. Then, we study whether weaker (and more natural) forms of average-case hardness could already suffice to obtain FGOWF, and obtain two negative results:
> 
> Separation I. We provide a strong oracle separation for the implication (\(\exists \) exponentially average-case hard language \(\implies \) \(\exists \) FGOWF).
> 
> Separation II. We provide a second strong negative result for an even weaker candidate win-win result. Namely, we rule out a black-box proof for the implication (\(\exists \) exponentially average-case hard language whose hardness amplifies optimally through parallel repetitions \(\implies \) \(\exists \) FGOWF). This separation forms the core technical contribution of our work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_20](https://doi.org/10.1007/978-3-031-07085-3_20)
## On the Multi-user Security of Short Schnorr Signatures with Preprocessing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-the-multi-user-security-of-short-schnorr-signatures-with-preprocessing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-the-multi-user-security-of-short-schnorr-signatures-with-preprocessing)
### Authors
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Seunghoon Lee, Purdue University, West Lafayette, IN, 47906, USA
### Abstract
> The Schnorr signature scheme is an efficient digital signature scheme with short signature lengths, i.e., 4k-bit signatures for k bits of security. A Schnorr signature \(\sigma \) over a group of size \(p\approx 2^{2k}\) consists of a tuple (s, e), where \(e \in \{0,1\}^{2k}\) is a hash output and \(s\in \mathbb {Z}_p\) must be computed using the secret key. While the hash output e requires 2k bits to encode, Schnorr proposed that it might be possible to truncate the hash value without adversely impacting security.
> 
> In this paper, we prove that short Schnorr signatures of length 3k bits provide k bits of multi-user security in the (Shoup’s) generic group model and the programmable random oracle model. We further analyze the multi-user security of key-prefixed short Schnorr signatures against preprocessing attacks, showing that it is possible to obtain secure signatures of length \(3k + \log S + \log N\) bits. Here, N denotes the number of users and S denotes the size of the hint generated by our preprocessing attacker, e.g., if \(S=2^{k/2}\), then we would obtain secure 3.75k-bit signatures for groups of up to \(N \le 2^{k/4}\) users.
> 
> Our techniques easily generalize to several other Fiat-Shamir-based signature schemes, allowing us to establish analogous results for Chaum-Pedersen signatures and Katz-Wang signatures. As a building block, we also analyze the 1-out-of-N discrete-log problem in the generic group model, with and without preprocessing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_21](https://doi.org/10.1007/978-3-031-07085-3_21)
## Multi-Designated Receiver Signed Public Key Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#multi-designated-receiver-signed-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#multi-designated-receiver-signed-public-key-encryption)
### Authors
* Ueli Maurer, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Christopher Portmann, Concordium, Zürich, Switzerland
### Abstract
> This paper introduces a new type of public-key encryption scheme, called Multi-Designated Receiver Signed Public Key Encryption (\(\textrm{M}{\mathrm{DRS-PKE}}\)), which allows a sender to select a set of designated receivers and both encrypt and sign a message that only these receivers will be able to read and authenticate (confidentiality and authenticity). An \(\textrm{M}{\mathrm{DRS-PKE}}\) scheme provides several additional security properties which allow for a fundamentally new type of communication not considered before. Namely, it satisfies consistency—a dishonest sender cannot make different receivers receive different messages—off-the-record—a dishonest receiver cannot convince a third party of what message was sent (e.g., by selling their secret key), because dishonest receivers have the ability to forge signatures—and anonymity—parties that are not in the set of designated receivers cannot identify who the sender and designated receivers are.
> 
> We give a construction of an \(\textrm{M}{\mathrm{DRS-PKE}}\) scheme from standard assumptions. At the core of our construction lies yet another new type of public-key encryption scheme, which is of independent interest: Public Key Encryption for Broadcast (\(\textrm{PKEBC}\)) which provides all the security guarantees of \(\textrm{M}{\mathrm{DRS-PKE}}\) schemes, except authenticity.
> 
> We note that \(\textrm{M}{\mathrm{DRS-PKE}}\) schemes give strictly more guarantees than Multi-Designated Verifier Signature (\({\textrm{MDVS}}\)) schemes with privacy of identities. This in particular means that our \(\textrm{M}{\mathrm{DRS-PKE}}\) construction yields the first \({\textrm{MDVS}}\) scheme with privacy of identities from standard assumptions. The only prior construction of such schemes was based on Verifiable Functional Encryption for general circuits (Damgård et al., TCC ’20).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_22](https://doi.org/10.1007/978-3-031-07085-3_22)
## A Fast and Simple Partially Oblivious PRF, with Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#a-fast-and-simple-partially-oblivious-prf-with-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#a-fast-and-simple-partially-oblivious-prf-with-applications)
### Authors
* Nirvan Tyagi, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Sofía Celi, Cloudflare, San Francisco, USA
* Nick Sullivan, Cloudflare, San Francisco, USA
* Christopher A. Wood, Cloudflare, San Francisco, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### Abstract
> We build the first construction of a partially oblivious pseudorandom function (POPRF) that does not rely on bilinear pairings. Our construction can be viewed as combining elements of the 2HashDH OPRF of Jarecki, Kiayias, and Krawczyk with the Dodis-Yampolskiy PRF. We analyze our POPRF’s security in the random oracle model via reduction to a new one-more gap strong Diffie-Hellman inversion assumption. The most significant technical challenge is establishing confidence in the new assumption, which requires new proof techniques that enable us to show that its hardness is implied by the q-DL assumption in the algebraic group model.
> 
> Our new construction is as fast as the current, standards-track OPRF 2HashDH protocol, yet provides a new degree of flexibility useful in a variety of applications. We show how POPRFs can be used to prevent token hoarding attacks against Privacy Pass, reduce key management complexity in the OPAQUE password authenticated key exchange protocol, and ensure stronger security for password breach alerting services.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_23](https://doi.org/10.1007/978-3-031-07085-3_23)
## Hiding in Plain Sight: Memory-Tight Proofs via Randomness Programming.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#hiding-in-plain-sight-memory-tight-proofs-via-randomness-programming)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#hiding-in-plain-sight-memory-tight-proofs-via-randomness-programming)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Riddhi Ghosal, University of California, Los Angeles, USA
* Joseph Jaeger, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> This paper continues the study of memory-tight reductions (Auerbach et al., CRYPTO ’17). These are reductions that only incur minimal memory costs over those of the original adversary, allowing precise security statements for memory-bounded adversaries (under appropriate assumptions expressed in terms of adversary time and memory usage). Despite its importance, only a few techniques to achieve memory-tightness are known and impossibility results in prior works show that even basic, textbook reductions cannot be made memory-tight.
> 
> This paper introduces a new class of memory-tight reductions which leverage random strings in the interaction with the adversary to hide state information, thus shifting the memory costs to the adversary.
> 
> We exhibit this technique with several examples. We give memory-tight proofs for digital signatures allowing many forgery attempts when considering randomized message distributions or probabilistic RSA-FDH signatures specifically. We prove security of the authenticated encryption scheme Encrypt-then-PRF with a memory-tight reduction to the underlying encryption scheme. By considering specific schemes or restricted definitions we avoid generic impossibility results of Auerbach et al. (CRYPTO ’17) and Ghoshal et al. (CRYPTO ’20).
> 
> As a further case study, we consider the textbook equivalence of CCA-security for public-key encryption for one or multiple encryption queries. We show two qualitatively different memory-tight versions of this result, depending on the considered notion of CCA security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_24](https://doi.org/10.1007/978-3-031-07085-3_24)
## Dynamic Collusion Bounded Functional Encryption from Identity-Based Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#dynamic-collusion-bounded-functional-encryption-from-identity-based-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#dynamic-collusion-bounded-functional-encryption-from-identity-based-encryption)
### Authors
* Rachit Garg, UT Austin, Austin, USA
* George Lu, UT Austin, Austin, USA
* Brent Waters, UT Austin, Austin, USA
* Rishab Goyal, MIT, Cambridge, USA
* Brent Waters, NTT Research, Palo Alto, USA
### Abstract
> Functional Encryption is a powerful notion of encryption in which each decryption key is associated with a function f such that decryption recovers the function evaluation f(m). Informally, security states that a user with access to function keys \(\mathsf {sk}_{f_1}, \mathsf {sk}_{f_2}, \ldots \) (and so on) can only learn \(f_1(m), f_2(m), \ldots \) (and so on) but nothing more about the message. The system is said to be q-bounded collusion resistant if the security holds as long as an adversary gets access to at most \(q = q(\lambda )\) function keys. A major drawback of such statically bounded collusion systems is that the collusion bound q must be declared at setup time and is fixed for the entire lifetime of the system.
> 
> We initiate the study of dynamically bounded collusion resistant functional encryption systems which provide more flexibility in terms of selecting the collusion bound, while reaping the benefits of statically bounded collusion FE systems (such as quantum resistance, simulation security, and general assumptions). Briefly, the virtues of a dynamically bounded scheme can be summarized as:
> 
> Fine-grained individualized selection. It lets each encryptor select the collusion bound by weighing the trade-off between performance overhead and the amount of collusion resilience.
> 
> Evolving encryption strategies. Since the system is no longer tied to a single collusion bound, thus it allows to dynamically adjust the desired collusion resilience based on any number of evolving factors such as the age of the system, or a number of active users, etc.
> 
> Ease and simplicity of updatability. None of the system parameters have to be updated when adjusting the collusion bound. That is, the same key \(\mathsf {sk}_f\) can be used to decrypt ciphertexts for collusion bound \(q = 2\) as well as \(q = 2^\lambda \).
> 
> We construct such a dynamically bounded functional encryption scheme for the class of all polynomial-size circuits under the general assumption of Identity-Based Encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_25](https://doi.org/10.1007/978-3-031-07085-3_25)
## Property-Preserving Hash Functions for Hamming Distance from Standard Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#property-preserving-hash-functions-for-hamming-distance-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#property-preserving-hash-functions-for-hamming-distance-from-standard-assumptions)
### Authors
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Kasper Green Larsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### Abstract
> Property-preserving hash functions allow for compressing long inputs \(x_0\) and \(x_1\) into short hashes \(h(x_0)\) and \(h(x_1)\) in a manner that allows for computing a predicate \(P(x_0, x_1)\) given only the two hash values without having access to the original data. Such hash functions are said to be adversarially robust if an adversary that gets to pick \(x_0\) and \(x_1\) after the hash function has been sampled, cannot find inputs for which the predicate evaluated on the hash values outputs the incorrect result.
> 
> In this work we construct robust property-preserving hash functions for the hamming-distance predicate which distinguishes inputs with a hamming distance at least some threshold t from those with distance less than t. The security of the construction is based on standard lattice hardness assumptions.
> 
> Our construction has several advantages over the best known previous construction by Fleischhacker and Simkin (Eurocrypt 2021). Our construction relies on a single well-studied hardness assumption from lattice cryptography whereas the previous work relied on a newly introduced family of computational hardness assumptions. In terms of computational effort, our construction only requires a small number of modular additions per input bit, whereas the work of Fleischhacker and Simkin required several exponentiations per bit as well as the interpolation and evaluation of high-degree polynomials over large fields. An additional benefit of our construction is that the description of the hash function can be compressed to \(\lambda \) bits assuming a random oracle. Previous work has descriptions of length \(\mathcal {O}({\ell \lambda })\) bits for input bit-length \(\ell \).
> 
> We prove a lower bound on the output size of any property-preserving hash function for the hamming distance predicate. The bound shows that the size of our hash value is not far from optimal.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_26](https://doi.org/10.1007/978-3-031-07085-3_26)
## Short Pairing-Free Blind Signatures with Exponential Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#short-pairing-free-blind-signatures-with-exponential-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#short-pairing-free-blind-signatures-with-exponential-security)
### Authors
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> This paper proposes the first practical pairing-free three-move blind signature schemes that (1) are concurrently secure, (2) produce short signatures (i.e., three or four group elements/scalars), and (3) are provably secure either in the generic group model (GGM) or the algebraic group model (AGM) under the (plain or one-more) discrete logarithm assumption (beyond additionally assuming random oracles). We also propose a partially blind version of one of our schemes.
> 
> Our schemes do not rely on the hardness of the ROS problem (which can be broken in polynomial time) or of the mROS problem (which admits sub-exponential attacks). The only prior work with these properties is Abe’s signature scheme (EUROCRYPT ’02), which was recently proved to be secure in the AGM by Kastner et al. (PKC ’22), but which also produces signatures twice as long as those from our scheme.
> 
> The core of our proofs of security is a new problem, called weighted fractional ROS (WFROS), for which we prove (unconditional) exponential lower bounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_27](https://doi.org/10.1007/978-3-031-07085-3_27)
## CoCoA: Concurrent Continuous Group Key Agreement.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#cocoa-concurrent-continuous-group-key-agreement)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#cocoa-concurrent-continuous-group-key-agreement)
### Authors
* Joël Alwen, AWS Wickr, New York, USA
* Benedikt Auerbach, ISTA, Klosterneuburg, Austria
* Miguel Cueto Noval, ISTA, Klosterneuburg, Austria
* Guillermo Pascual-Perez, ISTA, Klosterneuburg, Austria
* Krzyzstof Pietrzak, ISTA, Klosterneuburg, Austria
* Karen Klein, ETH Zurich, Zürich, Switzerland
* Michael Walter, Zama, Paris, France
### Abstract
> Messaging platforms like Signal are widely deployed and provide strong security in an asynchronous setting. It is a challenging problem to construct a protocol with similar security guarantees that can efficiently scale to large groups. A major bottleneck are the frequent key rotations users need to perform to achieve post compromise forward security.
> 
> In current proposals – most notably in TreeKEM (which is part of the IETF’s Messaging Layer Security (MLS) protocol draft) – for users in a group of size n to rotate their keys, they must each craft a message of size \(\log (n)\) to be broadcast to the group using an (untrusted) delivery server.
> 
> In larger groups, having users sequentially rotate their keys requires too much bandwidth (or takes too long), so variants allowing any \(T \le n\) users to simultaneously rotate their keys in just 2 communication rounds have been suggested (e.g. “Propose and Commit” by MLS). Unfortunately, 2-round concurrent updates are either damaging or expensive (or both); i.e. they either result in future operations being more costly (e.g. via “blanking” or “tainting”) or are costly themselves requiring \(\varOmega (T)\) communication for each user [Bienstock et al., TCC’20].
> 
> In this paper we propose CoCoA; a new scheme that allows for T concurrent updates that are neither damaging nor costly. That is, they add no cost to future operations yet they only require \(\varOmega (\log ^2(n))\) communication per user. To circumvent the [Bienstock et al.] lower bound, CoCoA increases the number of rounds needed to complete all updates from 2 up to (at most) \(\log (n)\); though typically fewer rounds are needed.
> 
> The key insight of our protocol is the following: in the (non-concurrent version of) TreeKEM, a delivery server which gets T concurrent update requests will approve one and reject the remaining \(T-1\). In contrast, our server attempts to apply all of them. If more than one user requests to rotate the same key during a round, the server arbitrarily picks a winner. Surprisingly, we prove that regardless of how the server chooses the winners, all previously compromised users will recover after at most \(\log (n)\) such update rounds.
> 
> To keep the communication complexity low, CoCoA is a server-aided CGKA. That is, the delivery server no longer blindly forwards packets, but instead actively computes individualized packets tailored to each user. As the server is untrusted, this change requires us to develop new mechanisms ensuring robustness of the protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_28](https://doi.org/10.1007/978-3-031-07085-3_28)
## Efficient Schemes for Committing Authenticated Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#efficient-schemes-for-committing-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#efficient-schemes-for-committing-authenticated-encryption)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### Abstract
> This paper provides efficient authenticated-encryption (AE) schemes in which a ciphertext is a commitment to the key. These are extended, at minimal additional cost, to schemes where the ciphertext is a commitment to all encryption inputs, meaning key, nonce, associated data and message. Our primary schemes are modifications of GCM (for basic, unique-nonce AE security) and AES-GCM-SIV (for misuse-resistant AE security) and add both forms of commitment without any increase in ciphertext size. We also give more generic, but somewhat more costly, solutions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_29](https://doi.org/10.1007/978-3-031-07085-3_29)
## On the Concrete Security of TLS 1.3 PSK Mode.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-the-concrete-security-of-tls-1-3-psk-mode)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-the-concrete-security-of-tls-1-3-psk-mode)
### Authors
* Hannah Davis, University of California San Diego, La Jolla, CA, USA
* Denis Diemert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Felix Günther, ETH Zürich, Zürich, Switzerland
### Abstract
> The pre-shared key (PSK) handshake modes of TLS 1.3 allow for the performant, low-latency resumption of previous connections and are widely used on the Web and by resource-constrained devices, e.g., in the Internet of Things. Taking advantage of these performance benefits with optimal and theoretically-sound parameters requires tight security proofs. We give the first tight security proofs for the TLS 1.3 PSK handshake modes.
> 
> Our main technical contribution is to address a gap in prior tight security proofs of TLS 1.3 which modeled either the entire key schedule or components thereof as independent random oracles to enable tight proof techniques. These approaches ignore existing interdependencies in TLS 1.3’s key schedule, arising from the fact that the same cryptographic hash function is used in several components of the key schedule and the handshake more generally. We overcome this gap by proposing a new abstraction for the key schedule and carefully arguing its soundness via the indifferentiability framework. Interestingly, we observe that for one specific configuration, PSK-only mode with hash function SHA-384, it seems difficult to argue indifferentiability due to a lack of domain separation between the various hash function usages. We view this as an interesting insight for the design of protocols, such as future TLS versions.
> 
> For all other configurations however, our proofs significantly tighten the security of the TLS 1.3 PSK modes, confirming standardized parameters (for which prior bounds provided subpar or even void guarantees) and enabling a theoretically-sound deployment.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_30](https://doi.org/10.1007/978-3-031-07085-3_30)
